export default function windDirection ( direction  ) {

	if ( direction > 0 && direction <= 22.5 ) {
		return `ССВ`;
	}

	if ( direction > 22.5 && direction <= 45 ) {
		return `СВ`;
	}

	if ( direction > 45 && direction <= 67.5 ) {
		return `ВСВ`;
	}

	if ( direction > 67.5 && direction <= 90 ) {
		return `В`;
	}

	if ( direction > 90 && direction <= 112.5 ) {
		return `ВЮВ`;
	}

	if ( direction > 112.5 && direction <= 135 ) {
		return `ЮВ`;
	}

	if ( direction > 135 && direction <= 157.5 ) {
		return `ЮЮВ`;
	}

	if ( direction > 157.5 && direction <= 180 ) {
		return `Ю`;
	}

	if ( direction > 180 && direction <= 202.5 ) {
		return `ЮЮЗ`;
	}

	if ( direction > 202.5 && direction <= 225 ) {
		return `ЮЗ`;
	}

	if ( direction > 225 && direction <= 247.5 ) {
		return `ЗЮЗ`;
	}

	if ( direction > 247.5 && direction <= 270 ) {
		return `З`;
	}

	if ( direction > 270 && direction <= 292.5 ) {
		return `ЗСЗ`;
	}

	if ( direction > 292.5 && direction <= 315 ) {
		return `СЗ`;
	}

	if ( direction > 315 && direction <= 337.5 ) {
		return `ССЗ`;
	}
	return `С`;
}