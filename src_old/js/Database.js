// $db.query('');

export let db = openDatabase('simple-time-track', '', 'Simple Time Track Database', 10 * 1024 * 1024);

// NULL => 3.0
db.changeVersion(
		'',
		'3.0',
		function (tx) {
			query(
					'CREATE TABLE IF NOT EXISTS tasks(ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, project TEXT, task TEXT, time INTEGER, start DATETIME, running BOOLEAN)'
			).then(null, function (reason) {
				console.log('ERROR: ' + reason)
			})
		}
);

export function query(sql, vars = []) {
	return new Promise(
			function (resolve, reject) {
				db.transaction(function (tx) {
					tx.executeSql(sql, vars, function (result) {
						resolve(result);
					}, function (tx, e) {
						console.log("There has been an error: " + e.message);
						reject(e);
					});
				});
			}
	);
}