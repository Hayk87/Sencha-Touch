Ext.define('mobapp.view.Home',{
	extend:'Ext.Panel',
	xtype:'home',
	config:{
		title:'Home',
		iconCls:'home',
		scrollable:true,
		styleHtmlContent:true,
		styleHtmlCls:'homepage',
		items:[
			{
				xtype:'titlebar',
				docked:'top',
				title:'Home'
			}
		],
		html:[
			'<h1>Hello World!</h1>',
			'<p>Welcome to Sencha Touch 2</p>'
		].join('<br>')
	}
})