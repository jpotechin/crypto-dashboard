import { Line } from 'react-chartjs-2';

const data = {
	labels: ['Apr 5', 'Apr 6', 'Apr 7', 'Apr 8', 'Apr 9', 'Apr 10', 'Apr 11'],
	datasets: [
		{
			label: 'BTC ',
			fill: false,
			lineTension: 0.1,
			backgroundColor: 'rgba(67, 56, 202)',
			borderColor: 'rgba(67, 56, 202)',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: 'rgba(67, 56, 202)',
			pointBackgroundColor: '#fff',
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: 'rgba(67, 56, 202)',
			pointHoverBorderColor: 'rgba(220,220,220,1)',
			pointHoverBorderWidth: 2,
			pointRadius: 4,
			pointHitRadius: 10,
			data: [59908, 59682, 57907, 56611, 58483, 58871, 60552, 60164],
		},
	],
};

const Middle = (): JSX.Element => {
	return (
		<div className=" bg-white ml-2   shadow-sm w-8/12 border rounded-xl border-gray-100">
			<div className="border-b p-3 border-gray-100">
				<p className="font-semibold  ">Bitcoin Daily Average Tracker (in USD) </p>
			</div>
			<div>
				<Line data={data} />
			</div>
		</div>
	);
};

export default Middle;
