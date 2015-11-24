Ext.define('mobapp.view.Rss',{
	extend:'Ext.Panel',
	xtype:'rss',
	config:{
		scrollable:true,
		title:'RSS',
		iconCls:'search',
		items:[
			{
				xtype:'fieldset',
				title:'get RSS data',
				items:[
					{
						xtype:'textfield',
						label:'RSS:',
						name:'rss'
					},
					{
						xtype:'button',
						text:'search and get',
						ui:'action',
						handler:function(){
							var url = document.getElementsByName('rss')[0].value;
							if(url != '')
							{
								alert(url);
							}
							else
							{
								alert('RSS field is EMPTY!');
							}
						}
					}
				]
			}
		]
	}
});