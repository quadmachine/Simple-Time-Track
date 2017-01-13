import angular from 'angular';
import 'angular-route';
import {AddController} from 'app/AddController';
import {PopupController} from 'app/PopupController';
import {DeleteController} from 'app/DeleteController';
import {EditController} from 'app/EditController';
import {config} from 'app/config';


export default angular.module("SimpleTimeTrackApp", ['ngRoute'])
		.controller('EditController', EditController)
		.controller('DeleteController', DeleteController)
		.controller('AddController', AddController)
		.controller('PopupController', PopupController)
		.config(config)
		.run(
				function ($rootScope) {
					return $rootScope.$on(
							"$routeChangeSuccess",
							function (ev, data) {
								if (data.$$route && data.$$route.controller) {
									return $rootScope.controller = data.$$route.controller;
								}
							});
				}
		).name;
