
var pushNotification = {
	register: function(successCallback, errorCallback, options) {
		if (errorCallback == null) { errorCallback = function() {}}

		if (typeof errorCallback !== "function")  {
			console.log("navigator.pushNotification.register failure: failure parameter not a function");
			return;
		}

		if (typeof successCallback !== "function") {
			console.log("navigator.pushNotification.register failure: success callback parameter must be a function");
			return;
		}

		cordova.exec(successCallback, errorCallback, "Push", "register", [options]);
	},
	unregister: function(successCallback, errorCallback) {
		if (errorCallback == null) { errorCallback = function() {}}

		if (typeof errorCallback !== "function")  {
			console.log("navigator.pushNotification.unregister failure: failure parameter not a function");
			return;
		}

		if (typeof successCallback !== "function") {
			console.log("navigator.pushNotification.unregister failure: success callback parameter must be a function");
			return;
		}

		cordova.exec(successCallback, errorCallback, "Push", "unregister", []);
	},
	setApplicationIconBadgeNumber: function(successCallback, errorCallback, badge) {
		if (errorCallback == null) { errorCallback = function() {}}

		if (typeof errorCallback !== "function")  {
			console.log("navigator.pushNotification.setApplicationIconBadgeNumber failure: failure parameter not a function");
			return
		}

		if (typeof successCallback !== "function") {
			console.log("navigator.pushNotification.setApplicationIconBadgeNumber failure: success callback parameter must be a function");
			return
		}

		cordova.exec(successCallback, successCallback, "Push", "setApplicationIconBadgeNumber", [{badge: badge}]);
	}
};

module.exports = pushNotification;