###
Tasks data provider
###

onError(tx, error) ->
  alert error.message

class Tasks

  @$inject: ['$scope']

  constructor: (@$scope) ->
    @$scope.db = openDatabase('timetrack', '', 'Time track database', 2 * 1024 * 1024)

    @$scope.db.changeVersion '', '2.0', (tx) ->
      tx.executeSql 'CREATE TABLE IF NOT EXISTS tasks(ID INTEGER PRIMARY KEY ASC, project_name TEXT, name TEXT, time INTEGER, start DATETIME, running BOOLEAN)', [], null, onError # table creation

    # 1.0 => 2.0
    if @$scope.dsb.version == '1.0' or @$scope.dsb.version == '1.1'
      @$scope.db.changeVersion @$scope.db.version, '2.0', (tx) ->
        tx.executeSql 'ALTER TABLE tasks ADD project_name TEXT AFTER ID'

  insert: (id, project_name, name) =>
    @$scope.db.transaction (tx) ->
      tx.executeSql 'INSERT INTO tasks (id, project_name, name, time, start, running) VALUES (?, ?, ?, ?, ?, ?)', [
        id,
        project_name,
        name,
        0,
        new Date,
        false
      ], ((tx, result) ->
        taskInterface.index()
        return
      ), onError

  remove: (id) =>
    db.transaction (tx) ->
      tx.executeSql 'DELETE FROM tasks WHERE id=?', [id], ((tx, result) ->
        window.clearInterval taskInterface.intervals[id]
        taskInterface.index()
        return
      ), onError
      return
    return

  removeAll: =>
    db.transaction (tx) ->
      tx.executeSql 'DELETE FROM tasks', [], ((tx, results) ->
        for iid of taskInterface.intervals
          `iid = iid`
          window.clearInterval taskInterface.intervals[iid]
        taskInterface.index()
        return
      ), onError

  deleteAll: =>
    db.transaction (tx) ->
      tx.executeSql 'DROP TABLE tasks', [], ((tx, results) ->
        alert 'Table tasks was droped'
        return
      ), onError

###
  Register services
###
app.service 'Tasks', Tasks

