Ext.define('mobapp.view.Content',{
	extend:'Ext.Panel',
	xtype:'content',
	config:{
		scrollable:true,
		styleHtmlContent:true,
		styleHtmlCls:'xmlcontent',
		title:'Content',
		iconCls:'organize',
		layout:'fit',
		items:[
			{
				xtype:'titlebar',
				docked:'top',
				title:'Content'
			},
			{
				xtype:'list',
				store:'Content',
				itemTpl:'<h1>{title}</h1> <div class="content">{description}</div> <div class="link"><a href="{link}" target="_blank">READ MORE</a></div> <hr>'
			}
		]
	}
});

