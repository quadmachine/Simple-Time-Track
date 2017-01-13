/**
 * @author Roman Ožana <ozana@omdesign.cz>
 */
export class DeleteController {
	constructor($scope, $routeParams) {
		this.$scope = $scope;
		$scope.all = $routeParams.what === 'all';
		$scope.what = $routeParams.what;
	}

	confirm() {
		// TODO delete ALL + Single
	}
}

DeleteController.$inject = ['$scope', '$routeParams'];