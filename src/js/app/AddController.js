/**
 * @author Roman Ožana <ozana@omdesign.cz>
 */
export class AddController {
	constructor($scope) {
		this.$scope = $scope;
	}

	add() {
		console.log(this.$scope.add);
	}
}

AddController.$inject = ['$scope'];