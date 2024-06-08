'use client';

export default function GlobalError(_error, reset) {
	return (
		<html>
			<body>
				<h2>Something went wrong!</h2>
				<button onClick={() => reset()}>Try again</button>
			</body>
		</html>
	);
}

// switch (error.code) {
// 	case 401:
// 		return <div>Właściwy komponent 401</div>;
// 		break;

// 	default:
// 		break;
// }
