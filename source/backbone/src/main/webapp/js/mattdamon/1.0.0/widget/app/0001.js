console.log("main init");
/**
 * @author MATTDAMON
 */
(function(window, undefined) {
	define("mattdamon/widget/app/0001",
			[ "i18n!mattdamon/locale/nls/Language" ], function(lang) {

				var Person = Backbone.Model.extend({
					// Person实例的构造函数
					initialize : function() {
						console.log('Person实例的构造函数');
						console.log(this);
					},

					// 默认属性
					defaults : {
						name : "Mark",
						height : "3\""
					},

					// 自定义方法
					run : function() {
						console.log('>>>>>>run function');
						console.log(this.attributes.name);
						console.log(this.get('height'));
					},

					bindEvent : function() {
						console.log('>>>>>>bindEvent function');
						this.bind("change:name", function() {
							console.log(">>>> [change:name] tigger" + " value["
									+ this.get('name') + "]");
						});
						this.bind("change:height", function() {
							console.log(">>>> [change:name] tigger" + " value["
									+ this.get('height') + "]");
						});

						this.bind("invalid", function(obj, errorMsg) {
							console.log(">>>> [invalid] tigger");
							console.log(obj);
							console.log(errorMsg);
						});
						// 触发事件监听
						this.bind("all", function(eventName) {
							console.log(">>>> [" + eventName + "] tigged");
						});
					},

					validate : function(attributes) {
						console.log('>>>>>>validate function')
						if (attributes.name == 'Joe') {
							// 返回出错信息
							return "Uh oh, you're name is Joe!";
						}
					}

				});

				return Person;
			});
})(window);
