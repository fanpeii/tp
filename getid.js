Fingerprint2.get(function(components) {
	const values = components.map(function(component, index) {
		if (index === 0) { 
			return component.value.replace(/\bNetType\/\w+\b/, '')
		}
		return component.value;
	})
	const murmur = Fingerprint2.x64hash128(values.join(''), 31);
	
	//murmur
	document.cookie="murmur="+murmur;
	fetch("./sub_index_set_id.php?murmur=" + murmur, {credentials: 'include'})
		.then(function(re_data) {
			return re_data.text();
		})
		.then(function(re_data2) {
			window.murmur=murmur;
		})
})
