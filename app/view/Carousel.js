Ext.define("mobapp.view.Carousel",{
	extend:"Ext.Panel",
	xtype:"mycarousel",
	//requires: ['Ext.Carousel'],
	//fullscreen: true,
	config:{
		title:'Carousel',
		iconCls:'action',
		scrollable:true,
		styleHtmlContent:true,
		styleHtmlCls:'carousel',
		layout: 'fit',//vbox
		items:[
			{
				xtype:"titlebar",
				title:"Carousel",
				docked:"top"
			},
			{
				xtype:"carousel",
				flex:1,
				items:[
					{
						xtype:"panel",
						html:[
							"<h1>Welcome Carousel</h1>",
							"<p>Sencha Touch 2</p>"
						].join("<br>"),
						style:"background:#eeeeee;"
					},
					{
						xtype:"video",
						/*x:600,
			            y:300,
			            width:175,
			            height:98,*/
			            url:"resources/videos/best.mp4",
					},
					{
						xtype:"image",
						src:"resources/life/1.jpg",
						html:"Image source is: /resources/life/1.jpg"
					},
					{
						xtype:"image",
						src:"resources/life/2.jpg"
					},
					{
						xtype:"image",
						src:"resources/life/3.jpg"
					},
					{
						xtype:"image",
						src:"resources/life/4.jpg"
					},
					{
						xtype:"image",
						src:"resources/life/5.jpg"
					},
					{
						xtype:"image",
						src:"resources/life/6.jpg"
					},
					{
						xtype:"image",
						src:"resources/life/7.jpg"
					},
					{
						xtype:"image",
						src:"resources/life/8.jpg"
					}
				]
			}
		]
	}

	

});