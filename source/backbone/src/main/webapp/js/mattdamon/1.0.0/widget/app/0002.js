console.log("main init");
/**
 * @author MATTDAMON
 */
(function(window, undefined) {
	define("mattdamon/widget/app/0002", [ "i18n!mattdamon/locale/nls/Language",
			"text!mattdamon/widget/app/templates/0002.htm" ], function(lang,
			template) {

		var Person = Backbone.Model.extend({
			defaults : {
				id : 0,
				name : 'jeey',
				age : 19,
				sex : '女'
			},
			initialize : function() {
				console.log('Person实例的构造函数');
			}
		});

		var contactData = [ {
			id : 1,
			name : 'Lee',
			age : 20,
			sex : '女'
		}, {
			id : 2,
			name : 'Tom',
			age : 19,
			sex : '男'
		}, {
			id : 3,
			name : 'Joe',
			age : 19,
			sex : '女'
		} ];

		var dataContact = new Backbone.Collection(contactData, {
			model : Person
		});

		var GridView = Backbone.View.extend({

			el : '#gridViewContainer',

			// 创建构造函数
			// options --> 提供给构造函数的对象
			initialize : function() {
				console.log('View实例的构造函数');
				// listen to change event on model
				this.listenTo(dataContact, 'add', this.addDataHandler);
				this.listenTo(dataContact, 'remove', this.removeDataHandler);
			},

			events : {
				// selector event
				'click #addBtn' : 'addHandler',
				'click #removeBtn' : 'removeHandler'
			// 'mouseover .btns-small' : 'aboutToSayHi'
			},

			addHandler : function() {
				console.log(">>>>>>>>>>>>>>>addHandler");
				dataContact.add({
					id : 4,
					name : 'Jill',
					age : 30,
					sex : '男'
				});
			},

			addDataHandler : function() {
				console.log(">>>>>>>>>>>>>>>addDataHandler");
				this.render();
			},

			removeHandler : function(e) {
				console.log(">>>>>>>>>>>>>>>removeHandler");
				var id = $(e.target).attr('idfiled');
				console.log(id);
				// 位置查找
				// console.log(contacts.at(0));
				// id查找
				dataContact.remove(dataContact.get(id));
			},

			removeDataHandler : function() {
				console.log(">>>>>>>>>>>>>>>removeDataHandler");
				this.render();
			},

			render : function() {
				// 创建数据, 这些数据可能是你从服务器获取的
				// 使用underscore 加载模版解析数据
				var compiledTemplate = _.template(template);
				console.log(dataContact);
				var html = compiledTemplate(dataContact);
				// 渲染html
				this.$el.html(html);
			}
		});

		return GridView;
	});
})(window);
