React.createClass({

	handleResetCounter: function (e) {
		e.preventDefault();
	},

	handleDeleteItem: function (e) {
		e.preventDefault();
	},

	handleEditItem: function (e) {
		e.preventDefault();
	},

	renader: (
			<li class="item">
				<label for=""></label>
				<input type="text"/>
				<span class="time"></span>
				<a href="#" onclick={this.handleEditItem}>Edit</a>
				<a href="#" onclick={this.handleResetCounter}>Reset</a>
				<a href="#" onclick={this.handleDeleteItem}>Delete</a>
			</li>
	)
});