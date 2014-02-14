var FriendsView = Backbone.View.extend({
	template: Handlebars.compile(
		'<h3>{{category}}</h3>' +
		'{{#each images}}' +
		'<img src="img/{{this}}" class="img-polaroid" />' +
		'{{/each}}'
	),
	
	render: function  () {
		this.$el.html(this.template(this.options));
		return this;
	}
});