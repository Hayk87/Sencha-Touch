Ext.define('mobapp.view.Home',{
	extend:'Ext.Panel',
	xtype:'home',
	config:{
		title:'Home',
		iconCls:'home',
		scrollable:true,
		styleHtmlContent:true,
		styleHtmlCls:'homepage',
		/*layout:{
			type:"card"
		},*/
		items:[
			{
				xtype:'titlebar',
				docked:'top',
				title:'Home',
				items:[
					{
						xtype:"button",
						iconCls:"more",
						handler:function(){
							//console.log( Ext.Viewport.getMenus() );
							if(Ext.Viewport.getMenus().left.isHidden())
							{
								Ext.Viewport.showMenu("left");
							}
							else
							{
								Ext.Viewport.hideMenu("left");
							}
						}
					},
					{
						xtype:"button",
						id:"right_menu_button",
						iconCls:"info",

						handler:function(){
							//console.log( Ext.Viewport.getMenus() );
							if(Ext.Viewport.getMenus().right.isHidden())
							{
								Ext.Viewport.showMenu("right");
							}
							else
							{
								Ext.Viewport.hideMenu("right");
							}
						}
					}
				]
			}
		],

		listeners:{
			initialize:function(){
				Ext.Viewport.setMenu(this.leftMenu(),{
					side:"left",
					reveal:true
				});
				Ext.Viewport.setMenu(this.rightMenu(),{
					side:"right",
					reveal:true
				});
			}
		},

		html:[
			'<h1>Hello World!</h1>',
			'<p>Welcome to Sencha Touch 2</p>',
			'<p>Sencha Touch is a high-performance HTML5 mobile application framework. You can use Sencha Touch to produce a native-app-like experience inside a browser or in a hybrid shell. Sencha Touch supports Android, iOS, Windows Phone, Microsoft Surface Pro and RT, and BlackBerry devices.</p>',
			'<p>Download and unzip Sencha Touch. You can unzip the software to any directory.</p>',
			'<p>Sencha Touch 2.3.1 requires Sencha Cmd 4.0.1, 4.0.2, or later. To check that you have correctly installed Sencha Cmd, type the sencha command, for example:</p>',
			'<p>Now that you have Sencha Touch and Sencha Cmd installed, you can generate an application.Choose or create a directory where your application will reside, change to that directory, and issue the following command:</p>',
			'<p>sencha -sdk /path/to/touch generate app MyApp</p>',
		].join('<br>')
	},
	leftMenu:function(){

		var items = [
			{
				xtype:"button",
				text:"Close",
				iconCls:"delete",
				handler:function(){
					Ext.Viewport.hideMenu("left");
				}
			},
			{
				xtype:"button",
				text:"Friends"
			},
			{
				xtype:"button",
				text:"Pictures"
			}
		];

		return Ext.create("Ext.Menu",{
			styel:"padding:0",
			id:"menu",
			width:300,
			scrollable:"vertical",
			items:items
		});
	},
	rightMenu:function(){
		var chldren = [
			{
				xtype:"button",
				text:"Close",
				iconCls:"delete",
				handler:function(){
					Ext.Viewport.hideMenu("right");
				}
			},
			{
				xtype:"panel",
				html:"<img src='resources/icons/Icon.png' style='width:100%;'>"
			}
		];

		return Ext.create("Ext.Menu",{
			width:300,
			scrollable:"vertical",
			items:chldren
		})
	}
});