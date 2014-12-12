$(function () {

var demoNs = {};
var indexedDB = window.indexedDB || window.webkitIndexedDB ||
                window.mozIndexedDB;

if ('webkitIndexedDB' in window) {
  window.IDBTransaction = window.webkitIDBTransaction;
  window.IDBKeyRange = window.webkitIDBKeyRange;
}

demoNs.indexedDB = {};
demoNs.indexedDB.db = null;

demoNs.indexedDB.onerror = function(e) {
  console.log(e);
};

demoNs.indexedDB.open = function() {
  var request = indexedDB.open("tasks");

  request.onsuccess = function(e) {
    var v = "1.99";
    demoNs.indexedDB.db = e.target.result;
    var db = demoNs.indexedDB.db;
    // We can only create Object stores in a setVersion transaction;
    if (v!= db.version) {
      console.dir(db);
      var setVrequest = db.setVersion(v);

      // onsuccess is the only place we can create Object Stores
      setVrequest.onerror = demoNs.indexedDB.onerror;
      setVrequest.onsuccess = function(e) {
        if(db.objectStoreNames.contains("tasks")) {
          db.deleteObjectStore("tasks");
        }

        var store = db.createObjectStore("tasks",
          {keyPath: "timeStamp"});

        demoNs.indexedDB.getAllTasks();
      };
    }
    else {
      demoNs.indexedDB.getAllTasks();
    }
  };

  request.onerror = demoNs.indexedDB.onerror;
}

demoNs.indexedDB.addTask = function(taskText) {
  var db = demoNs.indexedDB.db;
  var trans = db.transaction(["tasks"], IDBTransaction.READ_WRITE);
  var store = trans.objectStore("tasks");

  var data = {
    "text": taskText,
    "timeStamp": new Date().getTime()
  };

  var request = store.put(data);

  request.onsuccess = function(e) {
    demoNs.indexedDB.getAllTasks();
  };

  request.onerror = function(e) {
    console.log("Error Adding: ", e);
  };
};

demoNs.indexedDB.deleteTask = function(id) {
  var db = demoNs.indexedDB.db;
  var trans = db.transaction(["tasks"], IDBTransaction.READ_WRITE);
  var store = trans.objectStore("tasks");

  var request = store.delete(id);

  request.onsuccess = function(e) {
    demoNs.indexedDB.getAllTasks();
  };

  request.onerror = function(e) {
    console.log("Error Adding: ", e);
  };
};

demoNs.indexedDB.getAllTasks = function() {
  var tasks = document.getElementById("taskItems");
  tasks.innerHTML = "";

  var db = demoNs.indexedDB.db;
  var trans = db.transaction(["tasks"], IDBTransaction.READ_WRITE);
  var store = trans.objectStore("tasks");

  // Get everything in the store;
  var keyRange = IDBKeyRange.lowerBound(0);
  var cursorRequest = store.openCursor(keyRange);

  cursorRequest.onsuccess = function(e) {
    var result = e.target.result;
    if(!!result == false)
      return;

    renderTask(result.value);
    result.continue();
  };

  cursorRequest.onerror = demoNs.indexedDB.onerror;
};

function renderTask(row) {
  $("#taskItems").append($("<li>" + row.text + "</li>").append($("<a>").text(" [X]").click(function(){
    demoNs.indexedDB.deleteTask(row.timeStamp);
  }
  )));
}

$("#btnAddTask").click(function() {
    
   demoNs.indexedDB.addTask($("#txtTask").val());
   $("#txtTask").val("");
});

function init() {
  demoNs.indexedDB.open();
}
    
    init();
});
