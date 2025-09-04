const ExperienceSection = () => {
	const experiences = [
		{
			role: 'Machine Learning Engineer',
			company: 'Vosyn',
			period: '2025 - Present',
			highlights: 'Designing and deploying scalable ML workflows and automation pipelines to improve efficiency and deliver production-ready AI solutions.',
		},
		{
			role: 'Researcher & Teaching Assistant',
			company: 'University of Colorado Denver',
			period: '2024 - Present',
			highlights: 'Conducting research on LLMs and federated learning while mentoring 200+ students in advanced AI/ML courses and hands-on projects.',
		},
		{
			role: 'HEOR Software Developer & Analyst',
			company: 'Becton Dickinson',
			period: '2021 - 2022',
			highlights: 'Built NLP and computer vision pipelines to automate data extraction, and developed dashboards improving analytics and decision-making.',
		},
	];

	return (
		<div className="py-6 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">Experience</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				<div className="space-y-5">
					{experiences.map((exp) => (
						<div key={exp.company} className="relative">
							<div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />

								<div className="space-y-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900 dark:text-white">{exp.role}</h4>
										<span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
									</div>
									<p className="text-sm font-medium text-gray-600 dark:text-gray-300">{exp.company}</p>
									<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{exp.highlights}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
