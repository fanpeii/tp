Fingerprint2.get(function(components) {
	const values = components.map(function(component, index) {
		if (index === 0) { //把微信浏览器里UA的wifi或4G等网络替换成空,不然切换网络会ID不一样
			return component.value.replace(/\bNetType\/\w+\b/, '')
		}
		return component.value;
	})
	const murmur = Fingerprint2.x64hash128(values.join(''), 31);
	
	//murmur
	document.cookie="murmur="+murmur;
	fetch("http://118.254.8.234:8786/wxqtw2/sub_index_set_id.php?murmur=" + murmur, {credentials: 'include'})
		.then(function(re_data) {
			return re_data.text();
		})
		.then(function(re_data2) {
			window.murmur=murmur;
			//alert(re_data2);
		})
})
