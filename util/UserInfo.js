/**
 * New node file
 */
var mysql = require('./MySQLConnection');


function insertUserInfo(userInfo) {
	var connection = mysql.createdbConnection();
	//var connection = mysql.getdbConnection();
	connection.query("INSERT INTO users_info (user_id, firstname, lastname, emailid, address, city, zip, zipextn) VALUES(" + userInfo.userId + ",'" + userInfo.firstName + "','" + userInfo.lastName + "','" + userInfo.emailId + "','" + userInfo.address + "','" + userInfo.city + "'," + userInfo.zip + "," + userInfo.zipextn + ")", function(error, results) {
		if(!error) {
			console.log(results);
			if(results.length !== 0) {
				console.log("User Information inserted");
			}
		} else {
			console.log(error);
		}
	});
	mysql.closedbConnection(connection);
	//mysql.releasedbConnection(connection);
}

exports.insertUserInfo = insertUserInfo;


function editUserInfo(userInfo) {
	var connection = mysql.createdbConnection();
	//var connection = mysql.getdbConnection();
	connection.query("UPDATE users_info SET firstname = '" + userInfo.firstName + "', lastname = '" + userInfo.lastName + "', emailid = '" + userInfo.emailId + "', address = '" + userInfo.address + "', city = '" + userInfo.city + "', zip = " + userInfo.zip + ", zipextn = " + userInfo.zipextn + " WHERE user_id  = " + userInfo.userId , function(error, results) {
		if(!error) {
			console.log(results);
			if(results.length !== 0) {
				console.log("User Information edited for " + userInfo.movieId);
			}
		} else {
			console.log(error);
		}
	});
	mysql.closedbConnection(connection);
	//mysql.releasedbConnection(connection);
}

exports.editMovie = editMovie;


function deleteUserInfo(userId) {
	var connection = mysql.createdbConnection();
	//var connection = mysql.getdbConnection();
	connection.query("DELETE FROM users_info WHERE user_id  = " + userId + "", function(error, results) {
		if(!error) {
			console.log(results);
			if(results.length !== 0) {
				console.log("User Information deleted for " + userId);
			}
		} else {
			console.log(error);
		}
	});
	mysql.closedbConnection(connection);
	//mysql.releasedbConnection(connection);
}

exports.deleteUserInfo = deleteUserInfo;



function getUserInfoById(callback, userId) {
	var connection = mysql.createdbConnection();
	//var connection = mysql.getdbConnection();
	connection.query("SELECT * FROM users_info WHERE user_id  = " + userId, function(error, results) {
		if(!error) {
			//console.log(results);
			if(results.length !== 0) {
				console.log("User Information selected for " + userId);
			}
		} else {
			console.log(error);
		}
		callback(results, error);
	});
	mysql.closedbConnection(connection);
	//mysql.releasedbConnection(connection);
}

exports.getUserInfoById = getUserInfoById;

function getAllUsersInfo(callback) {
	var connection = mysql.createdbConnection();
	//var connection = mysql.getdbConnection();
	connection.query("SELECT * FROM users_info", function(error, results) {
		if(!error) {
			//console.log(results);
			if(results.length !== 0) {
				console.log("Users Information selected");
			}
		} else {
			console.log(error);
		}
		callback(results, error);
	});
	mysql.closedbConnection(connection);
	//mysql.releasedbConnection(connection);
}

exports.selectUsers = selectUsers;

function selectUserInfoBySearchCriteria(callback, userId, firstName, lastName, emailId, address, city, zip, zipextn) {
	var connection = mysql.createdbConnection();
	//var connection = mysql.getdbConnection();
	var query = "SELECT * FROM users_info WHERE ";
	var andFlag = false;
	if(userId != "") {
		query +=" user_id = '" + userId + "'";
		andFlag = true;
	}
	if(firstName != "") {
		if(andFlag) {
			query += " AND ";
		}
		query +=" firstname = '" + firstName + "'";
		andFlag = true;
	}
	if(lastName != "") {
		if(andFlag) {
			query += " AND ";
		}
		query +=" lastname = '" + lastName + "'";
		andFlag = true;
	}
	if(emailId != "") {
		if(andFlag) {
			query += " AND ";
		}
		query +=" emailid = '" + emailId + "'";
		andFlag = true;
	}
	if(address != "") {
		if(andFlag) {
			query += " AND ";
		}
		query +=" address = '" + address + "'";
		andFlag = true;
	}
	if(city != "") {
		if(andFlag) {
			query += " AND ";
		}
		query +=" city = '" + city + "'";
		andFlag = true;
	}
	if(zip != "") {
		if(andFlag) {
			query += " AND ";
		}
		query +=" zip = '" + zip + "'";
		andFlag = true;
	}
	if(zipextn != "") {
		if(andFlag) {
			query += " AND ";
		}
		query +=" zipextn = '" + zipextn + "'";
		andFlag = true;
	}
	console.log("Query for selectUserInfobysearchcriteria" + query);
	connection.query(query, function(error, results) {
		if(!error) {
			//console.log(results);
			if(results.length !== 0) {
				console.log("User Information selected for selectUserInfobysearchcriteria");
			}
		} else {
			console.log(error);
		}
		callback(results, error);
	});
	mysql.closedbConnection(connection);
	//mysql.releasedbConnection(connection);
}

exports.selectUserInfoBySearchCriteria = selectUserBySearchCriteria;