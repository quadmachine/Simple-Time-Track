import {Tasks} from '../Tasks';

/**
 * @author Roman Ožana <ozana@omdesign.cz>
 */
export class AddController {

	constructor($scope, $location) {
		this.$scope = $scope;
		this.$location = $location;
	}

	addTask() {
		Tasks.insert(
				this.$scope.project,
				this.$scope.task
		).then(
				function (response) {
					console.log(response);
					this.$location('#/');
				},
				function (reason) {
					console.log(reason);
				}
		)
	}
}

AddController.$inject = ['$scope', '$location'];