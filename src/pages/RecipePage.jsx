import { Heading, Image, Button,VStack,HStack } from '@chakra-ui/react';

// In this page i can display the selected recipe from the <RecipeListpage/> 
// whicht contain all the recipes showing more details of the recipe
// i made a buttom to guid back to the recipes list, here i have used 2 ways of styling 
//Chakra-ui and inline styling.

const RecipePage = ({ recipe, onBackButtonClick }) => {
  const {
    label,
    image,
    mealType,
    dishType,
    totalTime,
    dietLabels,
    healthLabels,
    cautions,
    ingredientLines,
    totalNutrients,
  } = recipe;

  const nutrients = {
    kcal: Math.round(totalNutrients.ENERC_KCAL.quantity),
    protein: Math.round(totalNutrients.PROCNT.quantity),
    fat: Math.round(totalNutrients.FAT.quantity),
    carbs: Math.round(totalNutrients.CHOCDF.quantity),
    cholesterol: Math.round(totalNutrients.CHOLE.quantity),
    sodium: Math.round(totalNutrients.NA.quantity),
  };

  return (
    
    <VStack paddingTop="30px" paddingBottom="30px" backgroundColor="blue" >
      <div style={{backgroundColor:'white', width: "50%" ,paddingBottom:"40px"}}>
        <Button onClick={onBackButtonClick} color="blue" backgroundColor= 'white' border="none" mb={4}>
        Back
      </Button>
      <div>
        <Image src={image} alt={label} h='500px' w='100%' objectFit='cover' />
        <Heading paddingLeft="30px"  as='h2'  m={0}>
          {label}
        </Heading>
      </div>
     
      <HStack>
        <VStack paddingBottom='20px'>
      <div>
        <Heading as='h4'  m={0}>
          Meal Type:
        </Heading>
        <div style={{ fontSize:'15px'}}>{mealType.join(', ')}</div>
      </div>
      <div>
        <Heading as='h4'  m={0}>
          Dish Type:
        </Heading>
        <div style={{ fontSize:'15px' }}>{dishType.join(', ')}</div>
      </div>
      <div style={{ paddingLeft:'30px' }}>
        <Heading as='h4'  m={0}>
          Total Cooking Time:
        </Heading>
        <div style={{ fontSize:'15px' }}>{totalTime} minutes</div>
      </div>
      {dietLabels.length > 0 && (
        <div>
          <Heading as='h4'  m={0}>
            Diet Label:
          </Heading>
          <div style={{ fontSize:'15px' }}>{dietLabels.join(', ')}</div>
        </div>
      )}

{cautions.length > 0 && (
        <div>
          <Heading as='h4'  mb={0}>
            Cautions:
          </Heading>
          <div style={{ fontSize:'15px' , backgroundColor:" pink" }}>{cautions.join(', ')}</div>
        </div>
      )}
      </VStack  >
      <HStack >
  <div style={{ paddingLeft: '100px' }}>
    <Heading as="h4" mb={2}>
      Health Labels:
    </Heading>
    <div spacing={2}>
      {healthLabels.map((label) => (
        <div key={label}>
          <div style={{ fontSize: '15px',color:"blue"}}>{label}</div>
        </div>
      ))}
    </div>
  </div>
</HStack>

      </HStack>
<HStack paddingBottom= "10px"  paddingLeft="20px">
      <div >
        <Heading as='h4' m={0}>
          Ingredients:
        </Heading>
        <div>
          {ingredientLines.map((line, index) => (
            <div key={index}>
              <div style={{ fontSize:'15px'}}>{line}</div>
            </div>
          ))}
        </div>
      </div>

      
        
      
      <div  style={{ paddingLeft:"30px" }}>
        <Heading as='h4'  mb={0}>
          Nutrients:
        </Heading>
        <div style={{ fontSize:'15px' }}>
        <div>Energy: {nutrients.kcal} kcal</div>
        <div>Protein: {nutrients.protein} g</div>
        <div>Fat: {nutrients.fat} g</div>
        <div>Carbs: {nutrients.carbs} g</div>
        <div>Cholesterol: {nutrients.cholesterol} mg</div>
        <div>Sodium: {nutrients.sodium} mg</div>
        </div>
      </div>
      
      </HStack>
      </div>
     </VStack>
    
  );
};

export default RecipePage;

