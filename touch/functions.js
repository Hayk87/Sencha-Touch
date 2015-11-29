/*function Xml_To_Json(url)
{
	$.ajax({
		url:url,
		type:'post',
		success:function(data){
			channels = data.getElementsByTagName("channel");
			elements = channels[0].children;console.log(channels);
			count = 0;
			$.each(elements,function(i,item){
				if(item.tagName == 'item')
				{
					count++;
				}
			});
			var result = "[";
			index = 0;
			$.each(elements,function(i,item){
				if(item.tagName == 'item')
				{
					index ++;
					Element = item.children;
					jsonItem = '';
					$.each(Element,function(j,El){
						if(El.tagName == 'title')
						{
							TEXT = El.textContent;
							TEXT = TEXT.split("\n");
							jsonItem += '{"title":"'+TEXT[1]+'",';
						}
						if(El.tagName == 'link')
						{
							jsonItem += '"link":"'+El.textContent+'",';
						}
						if(El.tagName == 'description')
						{
							TEXT = El.textContent;
							TEXT = TEXT.split("\n");
							if(index == count)
							{
								jsonItem += '"description":"'+TEXT[1]+'"}';
							}
							else
							{
								jsonItem += '"description":"'+TEXT[1]+'"},';
							}
						}
						result += jsonItem;
						jsonItem = '';
					});
				}
			});
			result += "]";console.log(result);
			result = JSON.parse(result);
			console.log(result);
		}
	});
}
Xml_To_Json("app/store/data.xml");*/