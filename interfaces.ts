interface Rect {
	readonly id: string,
	color?: string
	size: {
		width: number,
		height: number
	}
}

const rect: Rect = {
	id: 'Legonella',
	size: {
		width: 23,
		height: 25
	},
	color: '#fff'
}

const rect2 = {} as Rect 
const rect3 = <Rect> {}

interface RectWithArea extends Rect {
	getArea: () => number
}

const rect4: RectWithArea = {
	id: '123123',
	size: {
		width: 40,
		height: 50
	},
	getArea(): number {
		return this.size.width * this.size.height
	}
}

// =============

interface IClock {
	time: Date
	setTime(date: Date): void
}

class Clock implements IClock {
	time: Date = new Date()
	setTime(date: Date): void {
		this.time = date
	}
}

// ============

interface Style {
	[key: string]: string
}

const css = {
	border: '1px solid #fff',
	marginTop: '10px',
	borderRadius: '20%'
}
