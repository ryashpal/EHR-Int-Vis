import React from 'react';
import { GoslingComponent } from 'gosling.js';

import { useParams } from 'react-router-dom';

import EHR from './EHR.jsx'


function IntegratedData() {

	const { id } = useParams();

	return (
		<>
		<div className='flex flex-row h-full w-full'>
			<div className='p-3'>
				<h2 className="text-4xl font-extrabold dark:text-white flex items-center justify-center">EHR</h2>
				<EHR patientId={id}/>
			</div>
			<div className=''>
			<h2 className="text-4xl font-extrabold dark:text-white flex items-center justify-center">Genome</h2>
			<h2 className="text-2xl font-bold tracking-tight sm:text-2xl flex items-center justify-center">Contig 1</h2>
			<GoslingComponent
				spec={
					{
					// "layout": "circular",
					"assembly": [[1, 1018092]],
					"tracks": [
					  {
						"data": {
							"url": "https://raw.githubusercontent.com/ryashpal/EHR-Int-Analysis/main/temp/AH19K081_amr_genes_1.csv",
							"type": "csv",
							"chromosomeField": "c",
							"genomicFields": ["g1", "g2"],
						},
						"mark": "rect",
						"color": {"value": "#0072B2"},
						"stroke": {"value": "white"},
						"strokeWidth": {"value": 2},
						"x": {"field": "g1", "type": "genomic"},
						"xe": {"field": "g2", "type": "genomic"},
						"width": 600,
						"height": 50,
						"title": 'AMR Genes',
					  },
					//   {
					// 	"data": {
					// 		"url": "https://raw.githubusercontent.com/ryashpal/EHR-Int-Analysis/main/temp/AH19K081_genome_nlp_tokens_1.sampled.csv",
					// 		"type": "csv",
					// 		"chromosomeField": "c",
					// 		"genomicFields": ["g1", "g2"],
					// 	},
					// 	"mark": "rect",
					// 	"color": {"value": "#0072B2"},
					// 	"stroke": {"value": "white"},
					// 	"strokeWidth": {"value": 2},
					// 	"x": {"field": "g1", "type": "genomic"},
					// 	"xe": {"field": "g2", "type": "genomic"},
					// 	"width": 600,
					// 	"height": 50,
					// 	"title": 'Genome NLP Tokens',
					//   }
					]
				  }
				}
				experimental={{ reactive: true }}
			/>
			<h2 className="text-2xl font-bold tracking-tight sm:text-2xl flex items-center justify-center">Contig 2</h2>
			<GoslingComponent
				spec={
					{
					// "layout": "circular",
					"assembly": [[4, 115426]],
					"tracks": [
					  {
						"data": {
							"url": "https://raw.githubusercontent.com/ryashpal/EHR-Int-Analysis/main/temp/AH19K081_amr_genes_4.csv",
							"type": "csv",
							"chromosomeField": "c",
							"genomicFields": ["g1", "g2"],
						},
						"mark": "rect",
						"color": {"value": "#0072B2"},
						"stroke": {"value": "white"},
						"strokeWidth": {"value": 2},
						"x": {"field": "g1", "type": "genomic"},
						"xe": {"field": "g2", "type": "genomic"},
						"width": 600,
						"height": 50,
						"title": 'AMR Genes',
					  }
					]
				  }
				}
				experimental={{ reactive: true }}
			/>
			<h2 className="text-2xl font-bold tracking-tight sm:text-2xl flex items-center justify-center">Contig 5</h2>
			<GoslingComponent
				spec={
					{
					// "layout": "circular",
					"assembly": [[5, 88146]],
					"tracks": [
					  {
						"data": {
							"url": "https://raw.githubusercontent.com/ryashpal/EHR-Int-Analysis/main/temp/AH19K081_amr_genes_5.csv",
							"type": "csv",
							"chromosomeField": "c",
							"genomicFields": ["g1", "g2"],
						},
						"mark": "rect",
						"color": {"value": "#0072B2"},
						"stroke": {"value": "white"},
						"strokeWidth": {"value": 2},
						"x": {"field": "g1", "type": "genomic"},
						"xe": {"field": "g2", "type": "genomic"},
						"width": 600,
						"height": 50,
						"title": 'AMR Genes',
					  },
					//   {
					// 	"data": {
					// 		"url": "https://raw.githubusercontent.com/ryashpal/EHR-Int-Analysis/main/temp/AH19K081_genome_nlp_tokens_5.sampled.csv",
					// 		"type": "csv",
					// 		"chromosomeField": "c",
					// 		"genomicFields": ["g1", "g2"],
					// 	},
					// 	"mark": "rect",
					// 	"color": {"value": "#0072B2"},
					// 	"stroke": {"value": "white"},
					// 	"strokeWidth": {"value": 2},
					// 	"x": {"field": "g1", "type": "genomic"},
					// 	"xe": {"field": "g2", "type": "genomic"},
					// 	"width": 600,
					// 	"height": 50,
					// 	"title": 'Genome NLP Tokens',
					//   }
					]
				  }
				}
				experimental={{ reactive: true }}
			/>
			{/* <h2 className="text-2xl font-bold tracking-tight sm:text-2xl flex items-center justify-center">Contig 6</h2>
			<GoslingComponent
				spec={
					{
					// "layout": "circular",
					"assembly": [[6, 86239]],
					"tracks": [
					  {
						"data": {
							"url": "https://raw.githubusercontent.com/ryashpal/EHR-Int-Analysis/main/temp/AH19K081_genome_nlp_tokens_6.sampled.csv",
							"type": "csv",
							"chromosomeField": "c",
							"genomicFields": ["g1", "g2"],
						},
						"mark": "rect",
						"color": {"value": "#0072B2"},
						"stroke": {"value": "white"},
						"strokeWidth": {"value": 2},
						"x": {"field": "g1", "type": "genomic"},
						"xe": {"field": "g2", "type": "genomic"},
						"width": 600,
						"height": 50,
						"title": 'Genome NLP Tokens',
					  }
					]
				  }
				}
				experimental={{ reactive: true }}
			/>
			<h2 className="text-2xl font-bold tracking-tight sm:text-2xl flex items-center justify-center">Contig 8</h2>
			<GoslingComponent
				spec={
					{
					// "layout": "circular",
					"assembly": [[8, 51672]],
					"tracks": [
					  {
						"data": {
							"url": "https://raw.githubusercontent.com/ryashpal/EHR-Int-Analysis/main/temp/AH19K081_genome_nlp_tokens_8.sampled.csv",
							"type": "csv",
							"chromosomeField": "c",
							"genomicFields": ["g1", "g2"],
						},
						"mark": "rect",
						"color": {"value": "#0072B2"},
						"stroke": {"value": "white"},
						"strokeWidth": {"value": 2},
						"x": {"field": "g1", "type": "genomic"},
						"xe": {"field": "g2", "type": "genomic"},
						"width": 600,
						"height": 50,
						"title": 'Genome NLP Tokens',
					  }
					]
				  }
				}
				experimental={{ reactive: true }}
			/>
			<h2 className="text-2xl font-bold tracking-tight sm:text-2xl flex items-center justify-center">Contig 9</h2>
			<GoslingComponent
				spec={
					{
					// "layout": "circular",
					"assembly": [[9, 38813]],
					"tracks": [
					  {
						"data": {
							"url": "https://raw.githubusercontent.com/ryashpal/EHR-Int-Analysis/main/temp/AH19K081_genome_nlp_tokens_9.sampled.csv",
							"type": "csv",
							"chromosomeField": "c",
							"genomicFields": ["g1", "g2"],
						},
						"mark": "rect",
						"color": {"value": "#0072B2"},
						"stroke": {"value": "white"},
						"strokeWidth": {"value": 2},
						"x": {"field": "g1", "type": "genomic"},
						"xe": {"field": "g2", "type": "genomic"},
						"width": 600,
						"height": 50,
						"title": 'Genome NLP Tokens',
					  }
					]
				  }
				}
				experimental={{ reactive: true }}
			/>
			<h2 className="text-2xl font-bold tracking-tight sm:text-2xl flex items-center justify-center">Contig 11</h2>
			<GoslingComponent
				spec={
					{
					// "layout": "circular",
					"assembly": [[11, 36453]],
					"tracks": [
					  {
						"data": {
							"url": "https://raw.githubusercontent.com/ryashpal/EHR-Int-Analysis/main/temp/AH19K081_genome_nlp_tokens_11.sampled.csv",
							"type": "csv",
							"chromosomeField": "c",
							"genomicFields": ["g1", "g2"],
						},
						"mark": "rect",
						"color": {"value": "#0072B2"},
						"stroke": {"value": "white"},
						"strokeWidth": {"value": 2},
						"x": {"field": "g1", "type": "genomic"},
						"xe": {"field": "g2", "type": "genomic"},
						"width": 600,
						"height": 50,
						"title": 'Genome NLP Tokens',
					  }
					]
				  }
				}
				experimental={{ reactive: true }}
			/>
			<h2 className="text-2xl font-bold tracking-tight sm:text-2xl flex items-center justify-center">Contig 12</h2>
			<GoslingComponent
				spec={
					{
					// "layout": "circular",
					"assembly": [[12, 36386]],
					"tracks": [
					  {
						"data": {
							"url": "https://raw.githubusercontent.com/ryashpal/EHR-Int-Analysis/main/temp/AH19K081_genome_nlp_tokens_12.sampled.csv",
							"type": "csv",
							"chromosomeField": "c",
							"genomicFields": ["g1", "g2"],
						},
						"mark": "rect",
						"color": {"value": "#0072B2"},
						"stroke": {"value": "white"},
						"strokeWidth": {"value": 2},
						"x": {"field": "g1", "type": "genomic"},
						"xe": {"field": "g2", "type": "genomic"},
						"width": 600,
						"height": 50,
						"title": 'Genome NLP Tokens',
					  }
					]
				  }
				}
				experimental={{ reactive: true }}
			/> */}
			<h2 className="text-2xl font-bold tracking-tight sm:text-2xl flex items-center justify-center">Contig 15</h2>
			<GoslingComponent
				spec={
					{
					// "layout": "circular",
					"assembly": [[15, 19662]],
					"tracks": [
						{
							"data": {
								"url": "https://raw.githubusercontent.com/ryashpal/EHR-Int-Analysis/main/temp/AH19K081_amr_genes_15.csv",
								"type": "csv",
								"chromosomeField": "c",
								"genomicFields": ["g1", "g2"],
							},
							"mark": "rect",
							"color": {"value": "#0072B2"},
							"stroke": {"value": "white"},
							"strokeWidth": {"value": 2},
							"x": {"field": "g1", "type": "genomic"},
							"xe": {"field": "g2", "type": "genomic"},
							"width": 600,
							"height": 50,
							"title": 'AMR Genes',
						  },
						  {
						"data": {
							"url": "https://raw.githubusercontent.com/ryashpal/EHR-Int-Analysis/main/temp/AH19K081_genome_nlp_tokens_15.sampled.csv",
							"type": "csv",
							"chromosomeField": "c",
							"genomicFields": ["g1", "g2"],
						},
						"mark": "rect",
						"color": {"value": "#0072B2"},
						"stroke": {"value": "white"},
						"strokeWidth": {"value": 2},
						"x": {"field": "g1", "type": "genomic"},
						"xe": {"field": "g2", "type": "genomic"},
						"width": 600,
						"height": 50,
						"title": 'Genome NLP Tokens',
					  }
					]
				  }
				}
				experimental={{ reactive: true }}
			/>
			</div>
		</div>
			</>
	);
}

export default IntegratedData;
