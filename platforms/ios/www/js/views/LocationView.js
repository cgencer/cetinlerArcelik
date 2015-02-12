var LocationView = function (service) {

	this.initialize = function () {
        this.$el = $('<div/>');
    };

	this.render = function() {
		this.$el.html( this.template(employee) );
		return this;
    };

    this.initialize();
}
LocationView.template = Handlebars.compile( $("#location-view-tpl").html() );
