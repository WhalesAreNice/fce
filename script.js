let currentCategoryIndex = '';

const categories = [
    [
        'Assessment Setup', 
        [
            'Demographics',
            'Basic Diagnostics',
            'History',
            'Records Reviewed',
            'Present Status',
            'Medications',
            'Assessment Purpose',
            
        ] 
    ], //end of Assessment Setup
    [
        'Job Demand Analysis', 
        [
            'Vocational Status',
            'Sit/Stand',
            'Material handling',
            'Positional Tolerances',
            'Climbing',
            'Upper Extremity',
            'Job Simulation',
        ] 
    ], //Job Demand Analysis
    [
        'Musculoskeletal Testing', 
        [
            'Posture/Palpation/Reflex',
            'Cervical ROM',
            'Thoracic ROM',
            'Lumbar ROM',
            'Spine Comments',
            'Lower Extremity ROM/MMT',
            'Upper Extremity ROM/MMT',
            'Extremity Comments',
            'Hand ROM/MMT',
            'Orthotics/Assistive Devices',
            'Circumferential/Volumetric Measurements',
            'Two Point Discrimination',
            'Sharp Dull Awareness',
            'Semmes Weinstein',
            'Lower Extremity Sensation',
            'Sensation Comments',
            
        ] 
    ], //end of Musculoskeletal Testing
    [
        'Reliability of Pain', 
        [
            'Waddell Signs',
            'Psychometric Testing',
        ] 
    ], //end of Reliability of Pain
    [
        'Upper Extremity Testing', 
        [
            'Grip Testing',
            'Pinch Testing',
            'Fine Motor Coordination',
            'Gross Motor Coordination',
        ] 
    ], //end of Upper Extremity Testing
    [
        'Non-Material handling', 
        [
            'Walking',
            'Reaching',
            'Above Shoulder Reaching',
            'Bending',
            'Squating',
            'Kneeling',
            'Crawling',
            'Static Balance',
            'Dynamic Balance',
        ] 
    ], //end of Non-Material handling
    [
        'Occasional Material Handling', 
        [
            'Pre-handling Diagnostics',
            'Job Specific/Bending',
            'Squat Lift',
            'Power Lift',
            'Shoulder Lift',
            'Overhead Lift',
            'Bilateral Carry',
            'Unilateral Lift',
            'Unilateral Carry',
            'Pushing/Pulling',
        ] 
    ], //end of Occasional Material Handling
    [
        'Frequent Material Handling', 
        [
            'Frequent Squat Lift',
            'Frequent Power Lift',
            'Frequent Shoulder Lift',
            'Frequent Overhead Lift',
            'Frequent Bilateral Carry',
            'Frequent Unilateral Lift',
            'Frequent Unilateral Carry',
            'Frequent Pushing/Pulling',
        ] 
    ], //end of Frequent Material HandlingSit/Stand/Climb
    [
        'Sit/Stand/Climb', 
        [
            'Stair Climbing',
            'Ladder Climbing',
            'Sitting/Standing',
        ] 
    ], //end of Sit/Stand/Climb
    [
        'Job Simulated Functional Abilities', 
        [
            'Test 1',
            'Test 2',
            'Test 3',
        ] 
    ], //end of Job Simulated Functional Abilities
    [
        'ROP/COE Profile', 
        [
            'ROP Observation',
            'ROP Waddell Signs',
            'ROP Psychometric Testing',
            'ROP Upper Extremity Test',
            'ROP Non-Material Handling',
            'ROP Occasional Material Handling',
            'ROP Frequent Material Handling',
            'ROP Job Simulated Functional Testing',
            'ROP Climbing',
            'ROP Custom Test',
        ] 
    ], //end of ROP/COE Profile
    [
        'Results and Recommendations', 
        [
            'Evaluation Results',
            'Evaluation Summary',
            'Evaluation Recommendations',
            'Evaluation Comments',
            'Charts/Graphs/Tables',
        ] 
    ], //end of Results and Recommendations
    
]

function changeCategory(e) {
    
    for(let i = 0; i < categories.length; i++){
        document.getElementById(categories[i][0]).style.display = "none";
    }
    
    currentCategoryIndex = parseInt(e);
    
    document.getElementById(categories[currentCategoryIndex][0]).style.display = "block";
    
    changeSubCategory(0);
}

function changeSubCategory(e) {
    for(let i = 0; i < categories[currentCategoryIndex][1].length; i++){
        document.getElementById(categories[currentCategoryIndex][1][i]).style.display = "none";
    }
    
    document.getElementById(categories[currentCategoryIndex][1][e]).style.display = "block";
}

function something() {
    for(let i = 0; i < test2[0][1].length; i++){
        console.log(test2[0][1][i]);
    }
    
}