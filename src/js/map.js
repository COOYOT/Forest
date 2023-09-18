;(g => {
	var h,
		a,
		k,
		p = 'The Google Maps JavaScript API',
		c = 'google',
		l = 'importLibrary',
		q = '__ib__',
		m = document,
		b = window
	b = b[c] || (b[c] = {})
	var d = b.maps || (b.maps = {}),
		r = new Set(),
		e = new URLSearchParams(),
		u = () =>
			h ||
			(h = new Promise(async (f, n) => {
				await (a = m.createElement('script'))
				e.set('libraries', [...r] + '')
				for (k in g)
					e.set(
						k.replace(/[A-Z]/g, t => '_' + t[0].toLowerCase()),
						g[k]
					)
				e.set('callback', c + '.maps.' + q)
				a.src = `https://maps.${c}apis.com/maps/api/js?` + e
				d[q] = f
				a.onerror = () => (h = n(Error(p + ' could not load.')))
				a.nonce = m.querySelector('script[nonce]')?.nonce || ''
				m.head.append(a)
			}))
	d[l]
		? console.warn(p + ' only loads once. Ignoring:', g)
		: (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)))
})({ key: 'AIzaSyC-i6azW-MfjhjWqPDB-NgJa4P8I7T2MnI', v: 'beta' })

// Initialize and add the map
let map

async function initMap() {
	// The location of ForestProject
	const position = { lat: 50.08821173703995, lng: 19.89284198582771 }
	// Request needed libraries.
	//@ts-ignore
	const { Map } = await google.maps.importLibrary('maps')
	const { AdvancedMarkerElement } = await google.maps.importLibrary('marker')

	// The map, centered at ForestProject
	map = new Map(document.querySelector('.contact__map'), {
		zoom: 19,
		center: position,
		mapId: 'FOREST_MAP_ID',
	})

	// The marker, positioned at ForestProject
	const marker = new AdvancedMarkerElement({
		map: map,
		position: position,
		title: 'ForestProject',
	})
}
initMap()
