class Header extends React.Component {

	constructor() {

	}

	handleAddNewTask(e) {
		e.preventDefault();
	}

	handleDeleteAll(e) {
		e.preventDefault();
	}

	handleExportAll(e) {
		e.preventDefault();
	}

	render() {
		return <nav>
			<div class="container-fluid">
				<ul class="pull-left">
					<li>
						<a href="#" class="btn btn-primary" onclick={this.handleAddNewTask}>
							<i class="glyphicon glyphicon-plus"></i> New task</a>
					</li>
				</ul>
				<ul class="pull-right">
					<li>
						<a href="#" class="btn btn-danger" onclick={this.handleDeleteAll}>
							<i class="glyphicon glyphicon-remove"></i> Delete all</a>
					</li>
					<li><a href="#" class="btn btn-default" onclick={this.handleExportAll}>
						<i class="glyphicon glyphicon-download-alt"></i> Export all</a>
					</li>
				</ul>
			</div>
		</nav>
	}
}

export default Header;