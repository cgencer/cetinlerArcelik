var HomeView = function (service) {

	this.initialize = function () {
        this.$el = $('<div/>');
    };

	this.render = function() {
		this.$el.html( this.template(employee) );
		return this;
    };

    this.initialize();
}
HomeView.template = Handlebars.compile( $("#home-view-tpl").html() );
