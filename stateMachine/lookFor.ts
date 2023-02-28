/*1. Leer de un archivo de texto "Grande". Buscar uno.
2. Con el patrón determinado, ofrecer tres soluciones para identificar el patrón.
    a) Código puro y simple

a)
Patrón: "The", case insensitive.
Válido: The, THE, the, THe, Atthebute, etc.
Inválido: eht, aaaaaaaa, Attribute, etc.

Presentar lo resultados, inluyendo pero no limitado a:

Solución #1: Código puro y simple

1) Cantidad de palabras: X palabras.
2) Tiempo de ejecución: 7450 milisegundos.
3) Memoria utilizada durante la ejecución: 127KB

0. Leer un archivo
1. ¿Cómo medimos el tiempo de ejecución?
2. ¿Cómo cuento la cantidad de palabras?

function lookFor(text: string) {
  const lowercaseWord = text.toLowerCase();
  const word = lowercaseWord.split(" ");
  let repeatedWords:{} = {};
  word.forEach((words) => {
    // repeatedWords[words] = repeatedWords[words] ? repeatedWords[words] + 1 : 1;
    if (repeatedWords[words]) {
      repeatedWords[words]++;
    } else {
      repeatedWords[words] = 1;
    }
  });
   
  console.log(repeatedWords);
  return repeatedWords;
}
*/

function lookFor(text: string, keyword: string): string {
  const lowercaseWord = text.toLowerCase();
  const word = lowercaseWord.split(" ");
  let count: number = 0;

  word.map((e) => {
    if (e === keyword) count++;
  });

  let repeatedWord = `la palabra The se repite ${count}`;
  return  repeatedWord;
}

const letters = `
GALILEO, University System of Georgia
GALILEO Open Learning Materials 
Education Open Textbooks Education 
Summer 2018 

Arts Integration in Elementary Curriculum: 2ndEdition 
Molly Zhou 
Dalton State College, mzhou@daltonstate.edu 
David Brown 
Dalton State College, dobrown@daltonstate.edu 
Follow this and additional works at: https://oer.galileo.usg.edu/education-textbooks Part of the Art Education Commons 

Recommended Citation Zhou, Molly and Brown, David, "Arts Integration in Elementary Curriculum: 2nd Edition" (2018). Education Open Textbooks. 3. 
https://oer.galileo.usg.edu/education-textbooks/3 
This Open Textbook is brought to you for free and open access by the Education at GALILEO Open Learning Materials. It has been accepted for inclusion in Education Open Textbooks by an authorized administrator of GALILEO Open Learning Materials. For more information, please contact affordablelearninggeorgia@usg.edu. 
Arts Integration in Elementary Curriculum 
Cover of book has a picture of a flowering tree.

Molly Zhou David Brown 
Arts Integration in Elementary Curriculum 
edited by 
Molly Zhou Dalton State College 
David Brown Dalton State College 
May 2018 

Dalton, GA 
Image of CC By license
This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International license (CC BY-NC-SA). Cite the source: Zhou, M., Brown, D. (2018). Arts integration in elementary curriculum. Retrieved from (URL) 
Permission for Use Acknowledgements 
Grateful acknowledgement is made to the following sources for permission to use through creative commons licenses, author(s) or proper copyright holder(s): 
Chapter One Source: Silverstein, L. B., & Layne, S. (n.d.). What is arts integration? Retrieved from http://artsedge.kennedy.center.org/educators/how-to/arts-integration/what-is-arts-integration 
Chapter Two Sources: Isenberg, J., McCreadie, J., Dunham, J., & Pearson, B. (n.d.). What are some sources for research and current thinking about arts integration? Retrieved from http://artsedge.kennedy-center.org/educators/how-to/arts.integration/why-arts-integration/why-relevant-literature Silverstein, L. B. (n.d.). Creating a rationale for arts integration. Retrieved from http://artsedge.kennedy.center.org/educators/how-to/arts-integration/why-arts-integration/why-explaining-why Silverstein, L. B., & Layne, S. (n.d.). Why arts integration? Retrieved from http://artsedge.kennedy.center.org/educators/how-to/arts-integration/why-arts-integration/why-two-big-reasons 
Chapter Three Sources: Music. (n.d.). Retrieved from https://en.wikipedia.org/wiki/Music Sarrazin, N. (2016). Fundamentals and educational roots in the U.S. In N. Sarahzon, (2016), Music and the Child, Chapter 2. Open SUNY Textbooks. Retrieved from https://milnepublishing.geneseo.edu/music-and-the.child/chapter/chapter-2/ Sarrazin, N. (2016). Music integration. In N. Sarahzon, (2016), Music and the Child, Chapter 12. Open SUNY Textbooks. Retrieved from https://milnepublishing.geneseo.edu/music-and-the-child/chapter/chapter-12/ 
Chapter Four Sources: Calligraphy. (n.d.). Retrieved from https://en.wikipedia.org/wiki/Calligraphy Origami. (n.d.). Retrieved from https://en.wikipedia.org/wiki/Origami Papercutting. (n.d.). Retrieved from https://en.wikipedia.org/wiki/Papercutting Visual arts. (n.d.). Retrieved from https://en.wikipedia.org/wiki/Visual_arts 
Chapter Five Sources: Cinquain. (n.d.). Retrieved from https://en.wikipedia.org/wiki/Cinquain Haiku. (n.d.) Retrieved from https://simple.wikipedia.org/wiki/Haiku Poetry. (n.d.). Retrieved from https://en.wikipedia.org/wiki/Poetry 
Chapter Six Sources: Acrobatics. (n.d.). Retrieve from https://en.wikipedia.org/wiki/Acrobatics Ballet. (n.d.). Retrieved from https://en.wikipedia.org/wiki/Ballet 
ChildrenÕs Theater (2018, March 15). Retrieved from 
https://commons.wikimedia.org/wiki/Category:Children%27s_theatre Clown. (n.d.). Retrieved from https://en.wikipedia.org/wiki/Clown Glossary of ballet. (n.d.) Retrieved from https://en.wikipedia.org/wiki/Glossary_of_ballet List of circus skills. (n.d.). Retrieved from https://en.wikipedia.org/wiki/List_of_circus_skills Magic. (n.d.). Retrieved from https://en.wikipedia.org/wiki/Magic_(illusion) Mime artist. (n.d.). Retrieved from https://en.wikipedia.org/wiki/Mime_artist Music. (n.d.). Retrieved from https://en.wikipedia.org/wiki/Music Opera. (n.d.). Retrieved from https://en.wikipedia.org/wiki/Opera Performing Arts. (n.d.). Retrieved from https://en.wikipedia.org/wiki/Performing_arts Public speaking. (n.d.). Retrieved from https://en.wikipedia.org/wiki/Public_speaking Puppetry. (n.d.). Retrieved from https://en.wikipedia.org/wiki/Puppetry Theatre. (n.d.). Retrieved from https://en.wikipedia.org/wiki/Theatre Ventriloquism. (n.d.). Retrieved from https://en.wikipedia.org/wiki/Ventriloquism 
Chapter Seven Source: Watson, A., Timperio, A., Brown, H., Keren Best, K., & Hesketh, K. D. (2017). Effect of classroom-based physical activity interventions on academic and physical activity outcomes: A systematic review and meta-analysis. International Journal of Behavioral Nutrition and Physical Activity, 14, 114-127. doi 10.1186/s12966-017-0569-9. Retrieved from https://pdfs.semanticscholar.org/1f8c/a3aa898a2f5600072a7113508aaa7bb4cda3.pdf 
A big ÒThank YouÓ to Educ3214 students for permission to include their work examples and art work in this textbook. 
TABLE OF CONTENTS 
CHAPTER ONE ARTS INTEGRATION.....................................................................................................................6 SELECTED READING ........................................................................................................................... 6 ADDITIONAL SOURCES.....................................................................................................................12 CHAPTER TWO ARTS INTEGRATION AND THREE RS.....................................................................................15 SELECTED READING .........................................................................................................................15 ADDITIONAL SOURCES.....................................................................................................................21 CHAPTER THREE MUSIC........................................................................................................................................23 SELECTED READING .........................................................................................................................23 SUGGESTED ACTIVITIES...................................................................................................................43 TECHNOLOGY....................................................................................................................................43 ADDITIONAL SOURCES.....................................................................................................................43 CHAPTER FOUR VISUAL ARTS.............................................................................................................................46 SELECTED READING .........................................................................................................................46 SUGGESTED ACTIVITIES...................................................................................................................59 TECHNOLOGY....................................................................................................................................60 ADDITIONAL SOURCES.....................................................................................................................60 CHAPTER FIVE LITERARY ARTS POETRY.........................................................................................................62 SELECTED READING .........................................................................................................................62 SUGGESTED ACTIVITIES...................................................................................................................85 TECHNOLOGY....................................................................................................................................86 ADDITIONAL SOURCES.....................................................................................................................86 CHAPTER SIX PERFORMING ARTS......................................................................................................................89 SELECTED READING .........................................................................................................................89 SUGGEESTED ACTIVITIES ..............................................................................................................104 TECHNOLOGIES ...............................................................................................................................104 ADDITIONAL SOURCES...................................................................................................................105 CHAPTER SEVEN P.E./MOVEMENT ...................................................................................................................107 SELECTED READING .......................................................................................................................107 SUGGESTED ACTIVITIES.................................................................................................................122 TECHNOLOGY..................................................................................................................................123 ADDITIONAL SOURCES...................................................................................................................123 
CHAPTER ONE ARTS INTEGRATION SELECTED READING 
Background: Arts in Schools 
Many teachers, schools, and arts programs benefit from knowing the different ways the arts can be present in schools. Without making a distinction, opportunities can be missed, programs can lack clarity, or the arts can seem like something too unwieldy to incorporate. Making a distinction among the approaches can help narrow or focus objectives as well as help educators select the most appropriate approach based on their objectives. Ultimately, students are best served when all three variations-Arts as Curriculum, Arts-Enhanced Curriculum, and Arts-Integrated Curriculum-are part of their education (Figure 1.1). 
The arts find their way in to elementary, middle, and high school classrooms every day in a variety of ways. The variations can be distilled into three main categories: 
. 
Arts as Curriculum 

. 
Arts-Enhanced Curriculum 

. 
Arts-Integrated Curriculum 


All three variations are important, needed, and valid. All benefit from being supported by arts experiences-where students attend performances and exhibits by professional artists to engage in authentic experiences that deepen and broaden their arts understandings. 
Figure 1.1. Arts in Schools 

While the three variations naturally link and support each other, there are reasons why teachers and schools target one or more approaches. Understanding the differences in the approaches can help teachers and schools make informed choices about the programs they offer. 
Art as Curriculum 
If a school has a music, art, drama, or dance teacher, their approach is most likely and primarily Arts as 
Curriculum. Students develop knowledge and skills in a particular art form. Often referred to as Òarts learningÓ or Òart for artÕs sake,Ó the programs are guided by national, state, or local standards for each of the art forms. For example, in visual arts, students learn the content, processes, and techniques for two-or three-dimensional work. They learn how the visual arts developed and changed throughout history and engage in creating and analyzing works created in a variety of media. 
Arts-Enhanced Curriculum 
When the arts are used as a device or strategy to support other curriculum areas, but no objectives in the art form are explicit, then the approach is called Arts-Enhanced Curriculum. For example, students sing the ABCs as a means to other ends-remembering the letters and sequence of the alphabet. However, students are not usually expected to learn about melody, song structure, or develop specific singing skills. Arts-
Enhanced Curriculum acts as a ÒhookÓ to engage students in learning content. Additionally, teachers need 
little or no training in the art form. Arts-Enhanced Curriculum is often mistaken for Arts-Integrated Curriculum or a distinction is not made between the two. 
Arts-Integrated Curriculum 
In Arts-Integrated Curriculum, the arts become the approach to teaching and the vehicle for learning. Students meet dual learning objectives when they engage in the creative process to explore connections between an art form and another subject area to gain greater understanding in both. For example, students meet objectives in theater (characterization, stage composition, action, expression) and in social studies. The experience is mutually reinforcing-creating a dramatization provides an authentic context for students to learn more about the social studies content and as students delve deeper into the social studies content their growing understandings impact their dramatizations. For Arts-Integrated Curriculum to result in deep student understanding in both the art form and the other curriculum area, it requires that teachers engage in professional development to learn about arts standards and how to connect the arts to the curriculum they teach. 
Arts Integration Definition 
Arts integration is an approach to teaching in which students construct and demonstrate understanding through an art form. Students engage in a creative process, which connects an art form and another subject area and meets evolving objectives in both. 
Inside the Definition 
Arts Integration is an APPROACH to TEACHING... 
approach (n)-a path, road, or other means of reaching a person or place 
This definition begins with the assertion that arts integration is larger than an activity. Rather, arts integration is an approach to teaching that is embedded in one's daily practice. 
An "approach to teaching" refers to how something is taught rather than what is taught. Every teacher has an approach to teaching, whether or not they are aware of it. Approaches fall along a continuum from traditional, teacher-centered instruction to more progressive, student-centered instruction. Ultimately, our approach is based on our beliefs about how students learn. As an approach to teaching, arts integration relies heavily on the progressive, student-centered end of the continuum. 
This approach to teaching is grounded in the belief that learning is actively built, experiential, evolving, collaborative, problem-solving, and reflective. These beliefs are aligned with current research about the nature of learning and with the Constructivist learning theory. Constructivist practices that align with arts integration practices include: 
. 
Drawing on studentsÕ prior knowledge; 

. 
Providing active hands-on learning with authentic problems for students to solve in divergent ways; 

. 
Arranging opportunities for students to learn from each other to enrich their understandings; 

. 
Engaging students in reflection about what they learned, how they learned it, and what it means to them; 

. 
Using student assessment of their own and peers' work as part of the learning experience; 

. 
Providing opportunities for students to revise and improve their work and share it with others; 

. 
Building a positive classroom environment where students are encouraged and supported to take risks, explore possibilities, and where a social, cooperative learning community is created and nurtured. 


Students Construct and Demonstrate UNDERSTANDINGÉ 
understand-(1) to get or perceive the meaning of; to know or grasp what is meant by; comprehend (2) to gather or assume from what is heard; to infer 3) to know thoroughly; grasp or perceive clearly and fully the nature, character, functioning, etc. of 4) to have a sympathetic rapport with 
Constructing understanding of one's world is an active, mind-engaging process. Information must be mentally acted upon in order to have meaning for the learner (Brooks & Brooks, 1999). 
Arts integration provides multiple ways for students to make sense of what they learn (construct understanding) and make their learning visible (demonstrate understanding). It goes beyond the initial step of helping students learn and recall information to challenging students to take the information and facts they have learned and do something with them to build deeper understanding. 
"In the arts students have central and active roles as meaning makers. This role demands that they not only acquire knowledge but they develop the capacity to reflect on what they 
are learning and to use it as they interpret and create works of artÓ (Stevenson & Deasy, 2005, p. 37). 
Students' visible demonstrations of learning serve as both formative assessments to guide instruction and summative assessments to determine what students have learned. For example, when students are challenged to work as choreographers to create a dance that demonstrates how the seasons change, they must build their understanding of the vocabulary and concepts shared by science and dance (such as rotate, revolve, cycles, patterns, and change). Their dance will reflect their understandings and provide teachers with a quick, effective means to determine whether individual students know the difference between rotate and revolve, if a group understood the cyclical nature of the seasons, or if the class has mastered how to demonstrate the concept of change through physical movement. 
ÉThrough an ART FORM 
art form (n)-any branch of creative work in the arts (visual arts, dance, drama, music); the products of creative work 
Students can construct and demonstrate their understanding in many ways. Traditionally, they are asked to communicate their learning through a report or on a test. However, when they are involved in arts integration, their learning is evident in the products they create, such as the dance, painting, or dramatization. 
Students can-and should-have opportunities to construct and demonstrate their understandings in various ways. Nationwide, classrooms have become, and continue to become, more culturally, economically, and academically diverse. And yet, a great deal of instruction relies primarily, and sometimes exclusively, on speaking and writing as the way for students to show what they know. Today's research points to the power of learning through a variety of senses or modalities. Teachers are encouraged to plan instruction that engages students in visual, aural, and kinesthetic learning modalities so that students can actively process what they are learning. The recognition of the arts as powerful modalities for learning is embedded in this part of the definition. By their nature, the arts engage students in learning through observing, listening, and moving and offer learners various ways to acquire information and act on it to build understanding. They also offer a natural way to differentiate instruction as the arts offer multiple modes of representation, expression, and engagement (Wolf, 2008). Additionally, the arts provide an authentic context in which students solve problems such as those encountered by professional artists. 
Students Engage in a CREATIVE PROCESS... 
creativity (n)-an imaginative activity fashioned so as to produce outcomes that are original and of value (NACCC, 2007). 
The heart of arts integration is engagement in the creative process. Arts integration requires that students do more than repeat (a song), copy (an art project), or follow directions. They must create something that is original and of value. The creative process in the arts is a process not a single event. It includes many interacting phases and each phase is related to every other (Robinson, 2001). There are many descriptions of the creative process. The one provided here is a synthesis of ideas from many different sources. In this diagram (Figure 1.2), the process is made visible as five open circles: 1) students imagine, examine, and perceive; 2) they explore, experiment, and develop craft; 3) they create; 4) they reflect, assess, and revise, and 5) share their products with others. Arrows indicate the ways one can enter the process and the myriad ways the phases interact. 

When students engage in the creative process, they produce original work that communicates their ideas, insights, points of view, and feelings. The creative process can be "messy." It is difficult to predict what 
will happen, be discovered, or emerge during the process. Learners engage in inquiry and experimentation as opposed to following rigid, step-by-step rules. Some ideas, once explored, do not work well, while other ideas that were not originally considered, may surface as the perfect solution. If teachers are overly concerned with a "neat" process and product, they tend to make the creative choices for students and direct the outcome. In these cases, the creative process is present, but only for the teacher. It is the teacher's or teaching artist's responsibility to set a creative problem or challenge for students to solve, but not to take over and solve the challenge for the students. 
...Which CONNECTS an art form and Another Subject Area... 
connect (v)-to join, link, or fasten together; unite or bind 

A distinguishing aspect of arts integration is its interdisciplinary connections. Connections are made between a specific art form and a specific curriculum area (Figure 1.3). For example, collage can be connected to the study of geographical regions or choreography can be connected to the study of life cycles. Connections can also be made between a specific art form and a school's concern or need. Schools often identify a focus for improvement that is sometimes outside the formal curriculum. For example, the arts can connect to school concerns such as character education/bullying, collaboration, habits of mind, or multiple intelligences. 
Both connections-to curriculum or a concern/need-are strongest when they are mutually-reinforcing. In other words, by engaging in learning in one subject, learning in the other subject is reinforced and extended, and vice versa. Rather than imagining connections as two intersecting lines, mutually-reinforcing connections function as a cycle. 
For example, students are challenged to create a tableau (motionless stage picture) that depicts a defining moment of the Trail of Tears. They must examine the social studies content, find out what led to the United States government forcibly relocating the Native Americans west of the Mississippi River, and determine the impact the dislocation had on the Native Americans. They must then distill their understandings into a tableau, which requires them to consider stage composition, characters, actions, relationships, and expression. Because a tableau is so concise, students must return to the social studies curriculum to determine the most significant information. Once the tableau is created, students are challenged to compose short statements that they will speak within the tableau. Again, they must return to the social studies content, synthesize it, and make inferences. With each rotation through the cycle, student learning in both theatre and social studies is reinforced and deepened. The more they learn about the Trail of Tears, the more their tableaus develop; the more their tableaus develop, the more they build their understanding of history. 
Éand meets EVOLVING OBJECTIVES in both. evolve (v)-to develop gradually 

This final part of the definition underscores two ideas. First, arts integration requires teachers to set objectives in both the art form and the other subject area. The dual objectives are balanced; students are accountable for significant learning in both the art form and the other subject. Second, just as objectives evolve (Figure 1.4) and challenge students to deepen their understandings in science, math, or language arts, objectives in the art form must also evolve if students are to remain challenged. A student does not learn to express ideas through dance in one session. As students master each objective, they are ready to take on the next, more challenging ones. Teachers monitor student progress and adjust objectives to keep students challenged and interested within a unit or across a year. As students' mastery grows, so do their feelings of self-efficacy-the belief in oneself and one's ability to achieve. 
Teachers are familiar with the evolving nature of objectives in math, language arts and other subject areas. They are less familiar with evolving objectives in the arts. Here is an example in dance: 
. The objective is for students to create and perform a movement phrase set to a piece of music. This objective can begin with small groups of students choosing their movement phrase from a limited set of options and where the teacher counts the beat aloud. Once mastered, the objective evolves as students create their own movement phrase without pre-set options and can recall and repeat it. The objective further evolves as students are able to count the beat on their own. The objective evolves again as students are challenged to refine the quality of their movements. The evolution of objectives can pertain to one specific experience with a dance or can evolve as students have multiple experiences with dance across a school year. 
Arts Integration Checklist 
Some educators confuse any effort to include the arts in their classroom with arts integration. While all types of arts-based instruction are encouraged, it is helpful for educators to know when they are engaged in arts integration. To achieve this awareness, an Arts Integration Checklist (Figure 1.5) is provided. Educators 
answering ÒyesÓ to the items in the Checklist can be assured that their approach to teaching is indeed 
integrated. 
Figure 1.5. Arts Integration Checklist 
Approach to Teaching 
. Are learning principles of Constructivism (actively built, experiential, evolving, collaborative, problem-solving, and reflective) evident in my lesson? 
Understanding 
. Are the students engaged in constructing and demonstrating understanding as opposed to just memorizing and reciting knowledge? 

Art Form 
. Are the students constructing and demonstrating their understandings through an art form? 

Creative Process 
. 
Are the students engaged in a process of creating something original as opposed to copying or parroting? 

. 
Will the students revise their products? 



Connects 
. 
Does the art form connect to another part of the curriculum or a concern/need? 

. 
Is the connection mutually reinforcing? 


Evolving Objectives 
. 
Are there objectives in both the art form and another part of the curriculum or a concern/need? 

. 
Have the objectives evolved since the last time the students engaged with this subject matter? 


REFERENCES 
Brooks, J. G., & Brooks, M. G. (1999). In search of understanding: The case for constructivist classroom. Alexandria, VA: ASCD. 
NACCC (National Advisory Committee on Cultural and Creative Education). (2007). In P. Cochrane & 
M. Cockett, Building a creative school: A dynamic approach to school development (p. 7). Stoke on Trent, UK: Trentham Books. 
Robinson, S. K. (2001). Out of our minds: Learning to be creative. West Sussex, England: Capstone Publishing. 
Stevenson, L. M., & Deasy, R. (2005). Third space: When learning matters. Washington, DC: Arts Education Partnership. 
Wolf, D. P. (2008). Building and evaluating freedom machines: When it arts education a setting for equitable learning? In D. Glass (Ed.), Contours of inclusion: Frameworks and tools for evaluating arts in education (pp. 5-6). Washington, DC: VSAarts. 
ADDITIONAL SOURCES 

WEBSITES 
Arts integration: Useful resources on how you can integrate arts in the classroom. Retrieved from https://www.pinterest.com/edutopia/arts-integration/ 
Dorminey, S. (2015). Arts integration in a middle grades social studies classroom. Retrieved from https://digitalcommons.georgiasouthern.edu/honors-theses/87/ 
Fung, J. (2013). What to do when the arts are missing from your school. The Teaching Channel. Retrieved from: https://www.teachingchannel.org/blog/2013/05/17/arts-integration/ 
Jenson, E. (2012). The arts as a major discipline. Retrieved from http://www.ascd.org/publications/books/101011/chapters/The-Arts-as-a-Major-Discipline.aspx 
Lajevic, L. (2012). Arts integration: WhatÕs really happening in the elementary classroom? Retrieved from https://escholarship.org/uc/item/9qt3n8xt 
Reif, N., & Grant, L. (2010). Culturally responsive classrooms through art integration. Journal of Praxis in Multicultural Education, 5(1). Retrieved from https://digitalscholarship.unlv.edu/cgi/viewcontent.cgi?article=1035&context=jpme 
Riley, S. (2012). Using arts integration to enhance the common core. Retrieved from http://www.edutopia.org/blog/core-practices-arts-integration-susan-riley 
Ross, C. (2008). Art integration in the classroom. Retrieved from https://epublications.regis.edu/cgi/viewcontent.cgi?article=1100&context=theses 
Schwarts, K. (2015, January 23). How integrating arts into other subjects makes learning come alive. Retrieved from https://www.kqed.org/mindshift/38576/how-integrating-arts-into-other-subjects-makes.learning-come-alive 
Sorensen, M. (2010). Integrating art and literacy in the elementary classroom. Retrieved from https://scholarworks.uni.edu/hpt/30 
Tilney, V. (2013). The arts matter. Retrieved from http://www.scholastic.com/teachers/article/arts-matter 
Why integrating art into the classroom may improve retention? (2011). Retrieved from http://artplantaetoday.com/2011/09/30/why-the-arts-improve-content-retention/ 
Yarnbes, L. (2015, June 6). A teacherÕs experience with arts integration in the classroom [Web Blog Post]. Retrieved from http://blogs.getty.edu/iris/a-teachers-experience-with-arts-integration-in-the.classroom/ 

BOOKS AVAILABLE AT DALTON STATE COLLEGE LIBRARY 
Edwards, L. C. (2006). The creative arts: A process approach for teachers and children (4th ed.). Upper Saddle River, NJ: Pearson/Merrill/Prentice Hall. 
Goldberg, M. R. (2006). Integrating the arts: An approach to teaching and learning in multicultural and multilingual settings (3rd ed.). Boston, MA: Pearson/Allyn & Bacon. 
Smith, R. A. (2006). Culture and the arts in education: Critical essays on shaping human experience. New York, NY: Teachers College Press. 

VIDEOS 
Arts integration: Deepening understanding of core content [Video file]. (2016). Edutopia. Retrieved from https://youtu.be/IUsWCdu9Q_Q 
Hard fun: Transforming education through the arts [Video file]. (2013). Retrieved from http://youtu.be/LRQ4ay0Ot9U?list=PL3E8AC8BA0EFC8223 
Infusion arts in education: Using arts to learn [Video file]. (2012). Retrieved from https://www.youtube.com/watch?v=jLpI9T8dZYM 
Lavine Production Group. (2003). The Arts in every classroom: A video library, K-5. S. Burlington, VT: Annenberg/CPB.   
Teaching through the arts programme [Video file]. (2014). Retrieved from https://www.youtube.com/watch?v=vsFR1_KlYmo 
The power of arts integration: Series overview [Video file]. (2015). Retrieved from https://www.youtube.com/watch?v=9XcIg3eX2FY 
The state of the arts in AmericaÕs schools [Video file]. (2000). Retrieved from Films on Demand database.  

SCHOLARLY JOURNAL ARTICLES 
Daniel, V. A. H., Stuhr, P. L., & Ballengee-Morris, C. (2006). Suggestions for integrating the arts into curriculum. Art Education, 59(1), 6-11. 
Holmes, S. A. (2002). Creative by nature: Integrating the arts into environmental science education. Green Teacher, 2(69), 23-28. 
Lynch, P. (2007). Making meaning many ways: An exploratory look at integrating the arts with classroom curriculum. Art Education, 60(4), 33-38. 
Vitulli, P., Santoli, S. P., & Fresne, J. (2013). Arts in education: Professional development integrating the arts and collaborating with schools and community. International Journal of Pedagogies & Learning, 8(1), 45-52. 

CHAPTER TWO ARTS INTEGRATION AND THREE RS 


SELECTED READING 
The three Rs of arts integration entails the reasons, rationale, and research on arts integration. There are two big reasons educators are interested in arts integration: 1) Arts integration practices are aligned with how students learn; 2) Arts integration energizes teachers by providing increased professional satisfaction. In the past, and even somewhat today, the arts have been seen as something extra, and something fun to do if 
students needed a break from Òreal learning.Ó We now know that arts integration aligns with current best 
practices for teaching and learning, and that it offers a powerful way to help teachers return to the joy of teaching. 
Reason One 
Arts integration practices are aligned with how students learn. Ongoing research about how humans learn supports constructivist theories of learning (Grennon & Brooks, 1999). These theories reflect the characteristics of effective learning which include learning that is active and experiential, reflective, social, evolving, and focused on problem-solving. Arts integration provides learning experiences that reflect all these characteristics. 
When students learn through arts integration, they are engaged in experiences in which they actively build and demonstrate their understanding of both the art form and the other curriculum area. For example, students may create dances about the solar system, theatrical scenes about various perspectives of the Great Migration, or songs about math concepts. To do this, students must take what they know and understand about each subject area (e.g., dance and the science of the solar system) and communicate it to others through the art form. Students become active learners as they build on, extend, or challenge their prior understandings. 
Reflection, an inherent part of the creative process, is integral to arts integration practice. Within the creative process, students create, reflect, assess, and revise their dance, drama, song, poem, or film based on established criteria. Reflection is woven throughout the creative process as students reconsider the impact of their choices on an ongoing basis. When students have completed their work, they engage in additional reflection about the clarity, accuracy, and meaningfulness of their products. This reflection transforms these experiences into learning (SEDL, 2000). These verbal or written reflections offer insights for teachers and students. Teachers gain insight into studentsÕ growing understandings, which they use to guide their decisions about the next instructional steps. Students gain insight about their own learning process, creative process, and products. 
By its very nature, arts integration engages students in social and collaborative learning. Dance, music, theater, and media arts are collaborative art forms; the visual and literary arts have aspects of collaboration, too. When arts integration is the approach to teaching in a classroom, purposeful conversation, not silence, is the norm. Teams of students work together to consider how they can demonstrate what they know and understand. For example, after students gain information about the solar system and the elements of dance, they work in small groups to plan ways to demonstrate their understanding. Together, students make decisions about the science content and the dance process and how to best present it. Through conversations they listen, clarify their ideas, and negotiate for the best solutions. Their understanding of both content areas 
is expanded and deepened as they hear each otherÕs ideas and explain their own. 
Arts integration engages students in the creative process where learning is dynamic and evolving. The creative process involves students in revisiting ideas and revising their work. For example, at the beginning of a unit about the solar system, students might create a dance demonstrating their initial understandings. 
Students could return to the dance midway through the unit as their learning progresses, or they could revisit it at the end of the unit. The dance provides an authentic medium in which students demonstrate their growingunderstandings. Ideally, throughout a studentÕs school career, dance (or any other art form) would be one of the tools they would use for constructing and demonstrating their developing understandings. Each year, students would gain further knowledge and skills in dance that they would apply to the next dance they create. 
Arts integration places students into the role of problem solvers. The arts demonstrate that many questions have more than one right answer. The creative process requires that students create their own solutions to problems, make choices, and evaluate the results of those choices. Students explore, test their ideas, and 
refine their thinking. Theyalso develop appreciation for other studentsÕ solutions to the same problems. 
When learning is active and experiential, reflective, social, evolving, and focused on problem-solving, it becomes engaging and motivating. Because arts integration aligns with how students learn best, students find it personally meaningful and are drawn to it. They seek more opportunities to learn in and through the arts. For example, at-risk high school students report that their involvement with the arts is often the reason they come to school and stay in school (Deasy, 2003). 
Reason Two 
Arts integration energizes teachers by providing increased professional satisfaction. Not only is arts integration engaging and motivating for students, teachers find that it also energizes them and their teaching. Teachers that have been relying primarily on textbooks and worksheets as instructional strategies report that they feel increasingly discouraged by the drudgery of teaching and the lack of student engagement (CETA, n.d.). Many become bored or disenfranchised, and even leave the profession. 
Teachers participating in arts integration programs say that arts integration puts them back in touch with what originally excited them about teaching. They want classrooms full of engaged, curious, and responsive students. They want to do what is best for student learning. They want to be excited about going into the classroom every day. 
Arts integration can change the entire classroom culture. When every student is participating, engaged in purposeful conversation with their peers, and focused on making sense of the content in both the art form and the other subject area, the room fills with focused energy. Arts integrationÕs alignment with the education of the whole child results in a similar alignment with the concept of the Òwhole teacherÓ-the energized professional that makes learning engaging and challenging for students, and who enjoys tapping into his/her own creativity for teaching. Teachers regain a sense of efficacy when they see the positive 
impact ofarts integration on their studentsÕlearning. 
In the context of school cultures that frequently dismiss teachers as part of the problem, this approach [arts integration] affirms that teachers are part of the solution. When teachers are given the authority and responsibility to reflect on their work and make it better, their morale and their practice improves. Arts integration becomes an invitation to 
personal growth and learning that changes their identity as teachersÉ (Rabkin & Redmond, 2004, p. 114) 
In Third Space: When Learning Matters, the authors comment on the impact of arts integration on teacher satisfaction and renewal: 
Indeed, teachers in the case study schools said they derive delight and professional renewal and satisfaction from incorporating the arts into their teaching. They enjoy teaching more, 
primarily because of the responsiveness of their students, and the new level of collaboration with other teachers in the school. (Stevenson & Deasy, 2005, p. 74) 
Additionally, the impact of arts integration on school culture has been documented in two evaluation reports 
aboutthe Kennedy CenterÕs Changing Education Through the Arts (CETA) program. 
Teachers and leadersÉremarked that arts integration had come to define the way things are done at their school, made the entire atmosphere of their school more positive and cohesive, and helped make their school more child-centered. (Lentczner, Whitesitt, Franklin, & Wolcott, 2007, p. 19) 
Repeatedly teachers and leaders reported that their schoolÕs arts integration program had strengthened staff collegiality and collaboration. (Lentczner, Whitesitt, Franklin, & Wolcott, 2007, p. 19) 
Teachers claim they are approaching curriculum differently, taking more risks, open to serendipity in the lessons, excited by the changes and the possibilities, and motivated by the professionalization of their work made by continuing education. (Kruger, 2002, p. 3) 
Rationale: Explaining Why Arts Integration 
If arts integration is a part of your approach to teaching or a significant school-wide effort, you will be faced with the need to answer two questions for administrators, families, and other teachers: 
. 
What is arts integration? 

. 
Why do you believe arts integration benefits students? 


The first question, the ÒwhatÓ question, is answered by providing a definition and examples. The second question,the ÒwhyÓ question, is criticalifyou want togathersupportfor yourefforts. AnsweringtheÔwhyÕ 
question requires that you develop a rationale. A rationale describes the reasons for doing something. In this case, you identify the reasons or using arts integration as an instructional strategy. The purpose of a rationale statement is to convince others of the importance of this proposed approach. It is written in clear, concise language appropriate to those with whom you are communicating. Some confuse a rationale and a mission statement. They are different. A mission statement identifies the schoolÕs vision and values. A rationale explains why you are using this particular approach to teaching. Why take time to craft a rationale for arts integration? There are two reasons: 
. 
First, crafting a rationale provides an opportunity for you and your colleagues to develop a shared understanding of the outcomes you expect from your engagement with arts integration. These outcomes become the foundation for your arts integration program; 

. 
Second, having a rationale at your fingertips will help you communicate with and gain support for your efforts from colleagues, administrators, and families. 


To craft a rationale, you will need to read some of the literature and research about the benefits of the arts and arts integration. Here are a few resources to get you started: 
Linda CrawfordÕs (2004) study offers six reasons for arts integration: 
. 
The arts make content more accessible; 

. 
The arts encourage joyful, active learning; 

. 
The arts help students make and express personal connections to content; 

. 
The arts help students understand and express abstract concepts; 

. 
The arts stimulate higher level thinking; 

. 
The arts build community and help children develop collaborative work skills. 


Laura Stevenson and Richard Deasy (2005) describe the impact of the arts on students. The arts 
. 
Connect students to authentic learning that matters to them; 

. 
Provide opportunities for all learners-even struggling learners-to be successful; 

. 
Develop feelings of self-efficacy; 

. 
Increase intrinsic motivation to learn; 

. 
Develop studentsÕ abilities to apply learning to new situations and experiences. 


Daniel R. Scheinfeld (2004) explains why arts integration activities show promise for learners. Arts integration 
. 
Motivates students to engage more fully with the related subject area; 

. 
Extends how learners process and retain information because it combines several learning modalities (visual, aural, and kinesthetic) and thus reach a wider range of students; 

. 
(Focused on drama and reading comprehension) ÒStrengthens studentsÕ visualization of the text and their emotional engagement with it, both of which contribute to greater retention and understandingÓ (Scheinfeld, 2004, p. 4). 


Luke Rinne and colleagues (2011) examine how arts integration may build long-term memory of content: 
. Arts integration naturally involves several ways of processing information that may have positive effects on long-term memory. 
The Arts Education Partnership (n.d.) outlines research findings about a range of outcomes of arts education: 
. 
Academic Outcomes: literacy and language development, math achievement, overall academic achievement, underserved students; 

. 
Cognitive Outcomes: creative thinking, critical thinking, problem solving and reasoning; 

. 
Personal Outcomes: engagement and persistence, positive behavior, self-awareness, self-concept, and self-expression, self-efficacy and self-confidence; 

. 
Social and Civic Development: arts participation, collaboration and communication, community-building, community and civic engagement, cross-cultural understanding, and social development. 


Research on Arts Integration 
Arts integration is a teaching strategy in which the arts are integrated with the non-arts curriculum to deepen studentsÕunderstandingofboth (Isenberg&Jalongo, 2010;Werner &Freeman, 2001). A body of research explores the effects of arts education within differing frameworks and settings using quantitative, qualitative, and mixed methodologies. While little evidence suggests a clear, direct, causal link between learning through the arts and academic achievement, researchers have begun to look at the unique contributions the arts bring to student learning (Asbury & Rich, 2008; Deasy, 2002; Fiske, 1999; Hetland, Winner, Veenema & Sheridan, 2007; Winner & Hetland, 2000). Shifting the focus from traits measured by traditional testing methods to exploring the dispositions and habits of mind developed through arts-based instruction has led to a reevaluation of the role and benefits of the arts in education. 
Impact of Arts Integration on Students 
Arts integration and arts education, in various formats, have positively and consistently been linked to increased student engagement, motivation, and persistence (Asbury & Rich, 2008; Deasy, 2002; Fiske, 1999; Hetland, Winner, Veenema, & Sheridan, 2007; Stevenson & Deasy, 2005). Arts learning is participatory and active and requires students to interact with content and materials using both their bodies and minds. This way of learning engages students by offering them many ways to gain understanding and express their knowledge. The arts can engage students who are not typically reached through traditional teaching methods, including those from economically disadvantaged backgrounds, reluctant learners, and those with learning disabilities (Deasy, 2002; Fiske, 1999). In fact, children who frequently participate in the arts view themselves as more successful academically than those who infrequently participate in the arts (Burton, Horowtiz, & Abeles, 1999). 
When the arts are used to create a frame of reference for learning, students can make meaningful connections to one another, to themselves, to their lived world, and to other content areas (Burton, Horowtiz, & Abeles, 1999; Fiske, 1999; Hetland, Winner, Veenema, & Sheridan, 2007; Stevenson & Deasy, 2005). Because theybecome Òagents oftheir own learning,Ó students are often more willing to take responsibility for and give direction to their own learning experiences (Deasy & Stevenson, 2005). As students experiment with different art forms and processes, they learn to take risks through exploration and to develop flexible thinking skills, envisioning from different vantage points and responding to new possibilities in the creative process (Burton, Horowtiz, & Abeles, 1999; Eisner, 2002; Fiske, 1999; Hetland, Winner, Veenema, & Sheridan, 2007; Stevenson & Deasy, 2005). 
Benefits of Arts Integration for Teachers and Schools 
The benefits of arts integration extend beyond students, affecting teachers and schools as well. While a multitude of arts integration models are currently being applied in schools, almost all are built upon the collaborative efforts of classroom teachers and arts specialists (which may include artists in residence, visiting artists, school-based arts teachers, arts coaches, or some combination of these). Such collaborative relationships contribute to increased teacher satisfaction, interest, and success, and lead to the development of a sense of community of practice in the school (Hetland, Winner, Veenema, & Sheridan, 2007; Stevenson & Deasy, 2005; Werner & Freeman, 2001). These teachers are more willing to take risks, both in their curriculum planning and in front of their students. They are innovative in their teaching, willing to experiment, persevere in integrating the arts despite barriers, and approach their classes in a more child-centered rather than adult-centered manner (Burton, Horowtiz, & Abeles, 1999; Werner & Freeman, 2001). 
Transforming the Learning Environment 
Transforming a schoolÕs learning environment to include successful and sustained arts-integrated instruction requires participation by the whole school community (Betts, 1995). Supportive administrators, ranging from superintendents to principals, are needed to ensure the continuity and depth of any partnership or program (Borden, 2006; Burton, Horowtiz, & Abeles, 1999). Principals of arts-rich schools encourage teachers to take risks, to learn new skills, and to make changes in their instruction to support arts integration (Burton, Horowtiz, & Abeles, 1999). Arts integration teaching methods, as well as the purpose, theory, and benefits of this pedagogy, must be made explicit to teachers through professional development (Betts, 1995; Borden, 2006; Werner & Freeman, 2001). Without these supports, teachers often think of arts integration as something extra and time-consuming that they must do (Werner & Freeman, 2001). With appropriate professional development, support, and collaboration with school-based arts specialists and team members, teachers discover that arts-integrated teaching can and does meet existing curriculum standards. Sustained partnerships and professional development opportunities allow teachers to become comfortable making natural connections in the curriculum and turning routine activities into deep knowledge for learners (Werner & Freeman, 2001). 
REFERENCES 
Asbury, C., & Rich, B. (Eds.). (2008). Learning, arts, and the brain: The Dana consortium report on arts and cognition. New York, NY: Dana Press. 
Betts, J. (1995). Arts integration: Semiotic transmediation in the classroom. Paper presented at the annual meeting of American Educational Research Association (AERA), San Francisco, CA. 
Borden, L. (2006). Across the blue pacific: A World War II story. New York, NY: Houghton Mifflin. 
Burton, J., Horowitz, R., & Abeles, H. (1999). Learning in and through the arts: Curriculum implications. In Champions of change: The impacts of the arts on learning (pp. 36-46). Washington, DC: The Arts Education Partnership, the PresidentÕs Committee on the Arts and the Humanities, and The John D. and Catherine T. MacArthur Foundation.  
CETA. (n.d.) based on ongoing, informal discussions with teachers and teaching artists in the Kennedy CenterÕs Changing Education Through the Arts (CETA) program. 
Crawford, L. (2004) Lively learning: Using the arts to teach the K-8 curriculum. Greenfield, MA: Northeast Foundation for Children. 
Deasy, R. (Ed.) (2002). Critical links: Learning in the arts and student academic and social development., Washington, DC: Arts Education Partnership. 
Deasy, R. J. (2003). DonÕt axe the arts! National Association of Elementary School Principals, 82(3), 14. 
Eisner, E. (2002). The arts and the creation of mind. New Haven, CT: Yale University Press. 
Fiske, E. (Ed.). (1999). Champions of change: The impact of the arts on learning. Washington, DC: The 
Arts Education Partnership and the PresidentÕs Committee on the Arts and Humanities. 
Grennon, J., & Brooks, M. G. (1999). In search of understanding: The case for constructivist classrooms (revised ed.). Alexandria, VA: ASCD. 
Hetland, L., Winner, E., Veenema, S. & Sheridan, K. (2007). Studio thinking: The real benefits of visual arts education. New York, NY: Teachers College Press. 
Isenberg, J., & Jalongo, M. (2010). Creative thinking and arts-based learning: Preschool through fourth grade. Upper Saddle River, NJ: Pearson Merrill Prentice Hall. 
Kruger, A. C. (2002, September). The Kennedy center and schools: Changing education through the arts-evaluation report. The Kennedy Center, Washington, DC. 
Lentczner, B., Whitesitt, L., Franklin, E., Wolcott, N. (Eds.). (2007). Montgomery county (MD) arts integration model schools program evaluation report. Montgomery County Public Schools & Arts Education in Maryland Schools Alliance. 
Rabkin, N., & Redmond, R. (2004). Putting the arts in the picture: Reframing education in the 21st century. Chicago, IL: Columbia College Chicago. 
Scheinfeld, D. R. (2004). Arts integration in the classroom: Reflections on theory and application. Applied Research in Child Development, 5, 1-10. 
SEDL. (2000).  Action + reflection = learning. SEDL Technology Assistance Program, 3(2), 1. 
Stevenson, L. M., & Deasy, R. J. (2005). Third space: When learning matters. Washington, DC: Arts Education Partnership. 
Students: Research overview. (n.d.). Retrieved from http://www.artsedsearch.org/students/research.overview 
Werner, L., & Freeman, C. J. (2001). Arts for academic achievement: Arts Integration-A vehicle for changing teacher practice. Minneapolis, MN: Center for Applied Research and Educational Improvement, College of Education and Human Development. 
Winner, E., & Hetland, L. (Eds). (2000). The arts and academic achievement: What the evidence shows Executive summary. Retrieved from http://www.pz.harvard.edu/sites/default/files/REAP%20Executive%20Summary.pdf 
ADDITIONAL SOURCES 
WEBSITES 
Demoss, K., & Morris, T. (2011). How arts integration supports student learning: Students shed light on the connections. Retrieved from http://www.capeweb.org/wp-content/uploads/2011/05/support.pdf 
Goaldblatt, P. (2006). How John DeweyÕs theories underpin art and art education. Education & Culture, 22(1), 17-34. Retrieved from: http://docs.lib.purdue.edu/cgi/viewcontent.cgi?article=1067&context=eandc 
Peterson, E. (n.d.). Multiple intelligences and arts integration. Retrieved from http://theinspiredclassroom.com/2011/02/multiple-intelligences-and-arts-integration/ 
Pool, J. (2011). Arts integration in teacher preparation: Teaching the teachers. Retrieved from https://cloudfront.escholarship.org/dist/prd/content/qt65g5z7wp/qt65g5z7wp.pdf?t=lmqqr0 
Sloan, W. (2009). Making content connections through arts integration. Education Update, 51(3). Retrieved from http://www.ascd.org/publications/newsletters/education.update/mar09/vol51/num03/Making-Content-Connections-Through-Arts-Integration.aspx 
Varieties of arts integration. (2012). Retrieved from https://www.cde.state.co.us/coarts/artsintegrationmodels 

BOOKS AVAILABLE AT DALTON STATE COLLEGE LIBRARY 
Jensen, E. (2001). Arts with the brain in mind. Alexandria, VA: Association for Supervision & Curriculum Development (ASCD). 
Kohs, E. B. (1961). Music theory: A syllabus for teacher and student. New York, NY: Oxford University Press. 
Smith, R. A. (2006). Culture and the arts in education: Critical essays on shaping human experience. New York, NY: Teachers College Press. 

VIDEOS 
Arts education and multiple learning modes [Video file]. (2000). Retrieved from Films On Demand 
database. Arts integration at TCEA-Color theory and states of matter 1 [Video File]. (2014). Retrieved from https://youtu.be/oXPKCKJWWGg 
Benefits of arts education programs [Video file]. (2000). Retrieved from Films On Demand database. Brain research and arts education [Video file]. (2000). Retrieved from Films On Demand database. Essential arts programs for elementary children [Video file]. (2000). Retrieved from Films On Demand 
database. Funding arts education [Video file]. (2000). Retrieved from Films On Demand database. Future of arts in America [Video file]. (2000). Retrieved from Films On Demand database. The state of the arts in AmericaÕs schools [Video file]. (2000). Retrieved from Films On Demand 
database. Value of arts education [Video file]. (2000). Retrieved from Films On Demand database. 

SCHOLARLY JOURNAL ARTICLES 
Chemi, T. (2014). The artful teacher: A conceptual model for arts integration in schools. Studies in Art Education, 56(1), 370-383. 
Mishook, J. J., & Kornhaber, M. L. (2006). Arts integration in an era of accountability. Arts Education Policy Review, 107(4), 3-11. 
Smith, R. A. (1995). The limits and costs of integration in arts education. Arts Education Policy Review, 96(5), 21. 
Wiebe, S., Sameshima, P., Irwin, R., Leggo, C., Gouzouasis, P., & Grauer, K. (2007). Re-imagining arts integration: Rhizomatic relations of the everyday. The Journal of Educational Thought, 41(3), 263-280. 



CHAPTER THREE MUSIC SELECTED READING 
Music is an art form and cultural activity whose medium is sound organized in time. The common elements of music are pitch (which governs melody and harmony), rhythm (and its associated concepts tempo, meter, and articulation), dynamics (loudness and softness), and the sonic qualities of timbre and texture (which are sometimes termed the "color" of a musical sound). Different styles or types of music may emphasize, de-emphasize or omit some of these elements. Music is performed with a vast range of instruments and vocal techniques ranging from singing to rapping; there are solely instrumental pieces, solely vocal pieces (such as songs without instrumental accompaniment) and pieces that combine singing and instruments. 
There are many types of music, including popular music, traditional music, art music, music written for religious ceremonies and work songs such as chanteys. Music ranges from strictly organized compositions-such as Classical music symphonies from the 1700s and 1800s, through to spontaneously played improvisational music such as jazz, and avant-garde styles of chance-based contemporary music from the 20th and 21st centuries. 
Although the exact definition of music varies widely even in the West, music contains melody, harmony, 
rhythm, timbre, pitch, silence, and form or structure. What we know about music so farÉ 
. 
Music is comprised of sound. 

. 
Music is made up of both sounds and silences. 

. 
Music is intentionally made art. 

. 
Music is humanly organized sound (Bakan, 2011). 


In short, music is an intentionally organized art form whose medium is sound and silence, with core elements of pitch (melody and harmony), rhythm (meter, tempo, and articulation), dynamics, and the qualities of timbre and texture. 
Sound: 
Overtone: A fundamental pitch with resultant pitches sounding above it according to the overtone series. Overtones are what give each note its unique sound. 
Timbre: The tone color of a sound resulting from the overtones. Each voice has a unique tone color that is described using adjectives or metaphors such as Ònasally,Ó Òresonant,Ó Òvibrant,Ó Òstrident,Ó Òhigh,Ó Òlow,Ó Òbreathy,Ó Òpiercing,Ó Òringing,Ó Òrounded,Ó Òwarm,Ó Òmellow,Ó Òdark,Ó Òbright,Ó Òheavy,Ó Òlight,Ó Òvibrato.Ó 
Pitch:The frequency of the noteÕs vibration (note names C, D, E, etc.). Amplitude: How loud or soft a sound is. Duration: How long or short the sound is. 
Melody: A succession of musical notes; a series of pitches often organized into phrases. Harmony: The simultaneous, vertical combination of notes, usually forming chords. Rhythm: The organization of music in time; closely related to meter. Texture: The density (thickness or thinness) of layers of sounds, melodies, and rhythms in a piece: e.g., a 
complex orchestral composition will have more possibilities for dense textures than a song accompanied only by guitar or piano. Most common types of texture: 
. 
Monophony: A single layer of sound; e.g. a solo voice 

. 
Homophony: A melody with an accompaniment; e.g., a lead singer and a band; a singer and a guitar or piano accompaniment; etc. 

. 
Polyphony: Two or more independent voices; e.g., a round or fugue. 


Structure or Form: The sections or movements of a piece; i.e. verse and refrain, sonata form, ABA, Rondo (ABACADA), theme, and variations. 
Expression: 
Dynamics: Volume (amplitude)-how loud, soft, medium, gradually getting louder or softer 
(crescendo, decrescendo). 
Tempo: Beats per minute; how fast, medium, or slow a piece of music is played or sung. 
Articulation: The manner in which notes are played or words pronounced: e.g., long or short, 
stressed or unstressed such as short (staccato), smooth (legato), stressed (marcato), sudden 
emphasis (sforzando), slurred, etc. 
Music as an Art Form: Composition, Notation, and Improvisation 
Composition 
Composition" is the act or practice of creating a song, an instrumental music piece, a work with both singing and instruments, or another type of music. In many cultures, including Western classical music, the act of composing also includes the creation of music notation, such as a sheet music "score", which is then performed by the composer or by other singers or musicians. In popular music and traditional music, the act of composing, which is typically called songwriting, may involve the creation of a basic outline of the song, called the lead sheet, which sets out the melody, lyrics and chord progression. In classical music, the composer typically orchestrates his or her own compositions, but in musical theatre and in pop music, songwriters may hire an arranger to do the orchestration. In some cases, a songwriter may not use notation at all, and instead compose the song in her mind and then play or record it from memory. In jazz and popular music, notable recordings by influential performers are given the weight that written scores play in classical music. 
Even when music is notated relatively precisely, as in classical music, there are many decisions that a performer has to make, because notation does not specify all of the elements of music precisely. The process of deciding how to perform music that has been previously composed and notated is termed "interpretation." Different performers' interpretations of the same work of music can vary widely, in terms of the tempos that are chosen and the playing or singing style or phrasing of the melodies. Composers and songwriters who present their own music are interpreting their songs, just as much as those who perform the music of others. The standard body of choices and techniques present at a given time and a given place is referred to as performance practice, whereas interpretation is generally used to mean the individual choices of a performer. 
Although a musical composition often uses musical notation and has a single author, this is not always the case. A work of music can have multiple composers, which often occurs in popular music when a band collaborates to write a song, or in musical theatre, when one person writes the melodies, a second person writes the lyrics, and a third person orchestrates the songs. In some styles of music, such as the blues, a composer/songwriter may create, perform and record new songs or pieces without ever writing them down in music notation. A piece of music can also be composed with words, images, or computer programs that explain or notate how the singer or musician should create musical sounds. Examples range from avant.garde music that uses graphic notation, to text compositions, to computer programs that select sounds for musical pieces. Music that makes heavy use of randomness and chance is called aleatoric music and is associated with contemporary composers active in the 20th century. A more commonly known example of chance-based music is the sound of wind chimes jingling in a breeze. 
The study of composition has traditionally been dominated by examination of methods and practice of Western classical music, but the definition of composition is broad enough to include the creation of popular music and traditional music songs and instrumental pieces as well as spontaneously improvised works like those of free jazz performers and African percussionists such as Ewe drummers. 
Notation 
In the 2000s, music notation typically means the written expression of music notes and rhythms on paper using symbols. When music is written down, the pitches and rhythm of the music, such as the notes of a melody, are notated. Music notation also often provides instructions on how to perform the music. For example, the sheet music for a song may state that the song is a "slow blues" or a "fast swing", which indicates the tempo and the genre. 
Written notation varies with style and period of music. In the 2000s, notated music is produced as sheet music or, for individuals with computer scorewriter programs, as an image on a computer screen. In ancient times, music notation was put onto stone or clay tablets. To perform music from notation, a singer or instrumentalist requires an understanding of the rhythmic and pitch elements embodied in the symbols and the performance practice that is associated with a piece of music or a genre. In genres requiring musical improvisation, the performer often plays from music where only the chord changes and form of the song are written, requiring the performer to have a great understanding of the music's structure, harmony and the styles of a particular genre (e.g., jazz or country music). 
In Western art music, the most common types of written notation are scores, which include all the music parts of an ensemble piece, and parts, which are the music notation for the individual performers or singers. In popular music, jazz, and blues, the standard musical notation is the lead sheet, which notates the melody, chords, lyrics (if it is a vocal piece), and structure of the music. Fake books are also used in jazz; they may consist of lead sheets or simply chord charts, which permit rhythm section members to improvise an accompaniment part to jazz songs. Scores and parts are also used in popular music and jazz, particularly in large ensembles such as jazz "big bands." In popular music, guitarists and electric bass players often read music notated in tablature (often abbreviated as "tab"), which indicates the location of the notes to be played on the instrument using a diagram of the guitar or bass fingerboard. Tabulature was also used in the Baroque era to notate music for the lute, a stringed, fretted instrument. 
Improvisation 
Musical improvisation is the creation of spontaneous music, often within (or based on) a pre-existing harmonic framework or chord progression. Improvisation is the act of instantaneous composition by performers, where compositional techniques are employed with or without preparation. Improvisation is a major part of some types of music, such as blues, jazz, and jazz fusion, in which instrumental performers improvise solos, melody lines and accompaniment parts. In the Western art music tradition, improvisation was an important skill during the Baroque era and during the Classical era. In the Baroque era, performers improvised ornaments and basso continuo keyboard players improvised chord voicings based on figured bass notation. In the Classical era, solo performers and singers improvised virtuoso cadenzas during concerts. However, in the 20th and early 21st century, as "common practice" Western art music performance became institutionalized in symphony orchestras, opera houses and ballets, improvisation has played a smaller role. At the same time, some modern composers have increasingly included improvisation in their creative work. In Indian classical music, improvisation is a core component and an essential criterion of performances. 
What Do Children Hear? How Do They Respond to Music? 
ChildrenÕs musical encounters can be self-or peer-initiated, or teacher-or staff-initiated in a classroom or daycare setting. Regardless of the type of encounter, the basic music elements play a significant role in how children respond to music. One of the most important elements for all humans is the timbre of a sound. 
Recognizing a soundÕs timbre is significant to humans in that it helps us to distinguish the source of the 
sound, i.e. who is calling us-our parents, friends, etc. It also alerts us to possible danger. Children are able to discern the timbre of a sound from a very young age, including the vocal timbres of peers, relatives, and teachers, as well as the timbres of different instruments. 
Young children are quite sophisticated listeners. As early as two years of age, children respond to musical style, tempo, and dynamics, and even show preference for certain musical styles (e.g., pop music over classical) beginning at age five. On the aggregate level, children physically respond to musicÕs beat, and are able to move more accurately when the tempo of the music more clearly corresponds to the natural tempo of the child. As we might expect, children respond to the dynamic levels of loud and soft quite dramatically, changing their movements to match changing volume levels. The fact that children seem to respond to the expressive elements of music (dynamics, tempo, etc.) should not come as a surprise. Most people respond to the same attributes of music that children do. We hear changes in tempo (fast or slow), changes in dynamics (loud or soft), we physically respond to the rhythm of the bass guitar or drums, and we listen intently to the melody, particularly if there are words. These are among the most ear-catching elements, along with rhythm and melody. 
Teaching Music Vocabulary 
For most children, the basics are easily conveyed through concept dichotomies, such as: 
. 
Fast or Slow (tempo) 

. 
Loud or Soft (dynamics) 

. 
Short or Long (articulation) 

. 
High or Low (pitch) 

. 
Steady or Uneven (beat) 

. 
Happy or Sad (emotional response) 


For slightly older children, more advanced concepts can be used, such as: 
. 
Duple (2) or Triple (3) meter 

. 
Melodic Contour (melody going up or down) 

. 
Rough or Smooth (timbre) 

. 
Verse and Refrain (form) 

. 
Major or Minor (scale) 


Using Music in Arts-As-Curriculum 
Most schools still contain music and art teachers, who are valuable assets in providing input regarding art strategies, teaching materials, etc. This is definition of an arts-as-curriculum strategy, where the arts teacher teaches their separate material. Fully integrating the arts requires a time commitment and instructional expertise, butoften there isnÕtthe time, resources, orincentive to fullylearn orimplementthe entire process for a lesson. How might you utilize the music teacher in your school to enhance your lesson? What are 
some ways to work with the specialists to benefit the studentÕs learning experience? 
Using Music in Arts-Enhancement Curriculum 
There are many things to be learned from arts-enhancement as well. Using the arts yourself to enhance your lesson provides opportunities for students to experience music during the school day in a non-content related way. 
There are ample opportunities for children to experience music in their day, including singing, moving, clapping, or stomping that are not directly related to teaching content area but provide students an alternate 
form of expression, a chance to re-group and focus, for motivation, learn about proper group and individual expectations and behavior, and to make transitions between subjects and activities. How might you use 
music to ÒenhanceÓ a science orlanguage arts lesson?Vocabulary or poetry lesson? 
A Sample List of Arts-Enhancement Opportunities: 
1. Organization 
. 
Activity: lining up, cleaning up 

. 
Aesthetic Purpose: motivation 


2. Transitions 
. 
Activity: changing from one activity to another 

. 
Aesthetic Purpose: change of mood, re-focus energy 


3. Rituals 
. 
Activity: Greetings/Hello, goodbye, holiday music 

. 
Aesthetic Purpose: Prepare students mentally, provides stability and repetition 


4. Interstitial 
. 
Activity: Short break between two subjects or activities 

. 
Aesthetic Purpose: Provide relaxation, moment of expression, and alternate uses for cognitive functioning 


A Sample Day That Includes Music: 
9:10 Use music before the school day begins 
. Ritual: Set the mood/change the atmosphere in the room with sound 
9:20 Students enter and settle in to the room 
9:25 Morning Work, Attendance, Calendar 
. 
Organization: i.e. ÒIf youÕre ready for _____ clap your handsÓ (or stomp your feet, etc.) 

. 
Ritual: ÒGood Morning,Ó and/or movement 


10:00-10:40 Special (Music, Art, Physical Ed) 
. Transition: Focus for Math 
10:45 Math Stations 
. Organization: Line up for Lunch 
11:30 Lunch 
. 
Transition: Focus ready for reading 12:10-12:50 Reading/Literacy Stations 

. 
Interstitial: Break song/movement 12:50-1:30 Writing 

. 
Interstitial: Movement/song break 1:30-2:10 Social Studies/Science/Health 

. 
Transition: Movement activity/song 2:10-2:25 Snack/Play time 


 activity ÒHead ShouldersÓ 
. 
Organization: Focus: Line up for Library or Lab 2:25-3:05 Computer Lab or Library 

. Transition 
3:10 Pickup and pack-up 
. Organization: ÒClean up songÓ 
3:15 Dismissal 
. Ritual: ÒGoodbyeÓ song 
Song Examples (Substitute any subject such as math, reading, physical education, art, instead of music, and any action 
instead of Òstand on upÓ or Òclap your hands.Ó) If YouÕre Ready for Music 

Janet Elder (n.d.), in her article on ÒBrain Friendly Music in the ClassroomÓ suggests the following four groups of reasons to incorporate music into the classroom: 
1. 
MusicÕs effect on the physical body and brain; 

2. 
MusicÕs effect on the emotional body; 

3. 
MusicÕs effect on the physicaland learning environment; 

4. 
MusicÕs effect on group coherence and intimacy. (Elder, n.d., p. 1) 


For example, musicÕs beats per minute (b.p.m.) or tempo, hasa direct impact on the human body. 
Elder (n.d.) also goes on to suggest specific songs to use for different classroom situations, such as playing 
classical music duringindividual or group work or ÒGet Up Offa That ThingÓ byJames Brown for stretch 
breaks. There are many, many different types of songs and places to use them when working with children, and the inclusion of music in the daily routine can improve transitions and the overall mood of a classroom (Table 3.1). 
Table 3.1. Class Times When Music Is Appropriate 

Class Activity  Musical Qualities To Look For In Song Selection  Song Examples  
As students enter class  Select loose, upbeat, uplifting music, or music that pertains in some way to the course or topic that day. Songs with humor also start the class on the right foot.  ÒStar Wars,Ó ÒSummon the HeroesÓ and other John WilliamsÕ Olympic Music, ÒWalk Right InÓ (Rooftop Singers), ÒThanks for ComingÓ and ÒHello, Welcome to the MeetingÓ (ÒLaughable LyricsÓ CD), and ÒThe More We Get TogetherÓ (Raffi)  
To welcome students  ÒHi-Ho, Hi-Ho, ItÕs Off to Work We  
back after a weekend  Go!Ó ÒThe FlintstonesÓ (ÒYabba Dabba  
or holiday break  DoÓ TV theme, Aron Apping), ÒMonday, MondayÓ (Mamas and Papas), ÒReveilleÓ bugle call (ÒAuthentic Sound Effects, Vol. 3Ó)  
To comment on the weather  On a rainy day: ÒRaindrops Keep Falling on My HeadÓ (B. J. Thomas), ÒHere Comes That Rainy Day Feeling AgainÓ (The Fortunes), ÒCome CleanÓ (Hilary Duff) For sunny days: ÒItÕs a Beautiful MorningÓ (The Rascals), ÒGood Day SunshineÓ (The Tremeloes), or ÒWalking on SunshineÓ (Katrina and The Waves)  
To get students on their feet  Students need a change after 15-20 minutes of sitting. Use any of these when you want to have them stand up to stretch, change where they are sitting, or move for some other reason.  ÒGet on Your FeetÓ (Gloria Estefan), ÒLine UpÓ (Aerosmith), ÒStand Up!Ó (David Lee Roth), Ò1-2-3-4Ó (Ataris), ÒUp!Ó (Shania Twain), ÒGet Up Offa That ThingÓ (James Brown), ÒArkansas TravelerÓ (ÒSmokey Mountain HitsÓ CD)  
As students are moving into collaborative groups  Look for songs with themes of friends, help, or general encouragement.  ÒHelpÓ (Beatles), ÒWe Can Work It OutÓ (Beatles), ÒYouÕve Got a FriendÓ (Carol King), ÒLean on MeÓ (Bill Withers), ÒReach OutÓ (The Four Tops), ÒIÕm into Something GoodÓ (HermanÕs Hermits), ÒCall MeÓ (Blondie), ÒYou Can Make It if You TryÓ (James Brown)  

Class Activity  Musical Qualities To Look For In Song Selection  Song Examples  
After a pair-share review (Students make the immediate connection between these songs and having to recall/review material)  Select songs with titles or lyrics that include Òremember,Ó Òmemory,Ó etc.  ÒThanks for the MemoriesÓ (Bob Hope and Shirley Ross), ÒAlways Something There to Remind MeÓ (Naked Eyes), ÒUnforgettableÓ (Peggy Lee)  
As low background  The volume should be low enough  ÒWater Music SuiteÓ (Handel),  
music when students  that you could speak at a  ÒBrandenberg ConcertosÓ (Bach), ÒEine  
are working in small  conversational level without  Kleine NachtmusikÓ (Mozart), and  
groups, in pairs, or  raising your voice. The music  music by Telemann, Vivaldi, or Corelli  
individually, or when  should act as a filter for unwanted  in a major key. Soft piano or violin  
they are taking a test  noise and help create a relaxed, mentally alert state. If any student objects to background music, you should not use it. However, if the entire class likes background music, try to play the same baroque music during the test that was used during the original presentation of the material: it acts as an auditory memory cue.  concertos with orchestral accompaniments work well.  
To use music to create positive stress or add drama  ÒJames Bond SuiteÓ (Henry Rabinowitz and the RCA Orchestra), ÒLaw and OrderÓ (TV theme), ÒJeopardyÓ (TV theme), ÒMission ImpossibleÓ (TV theme), ÒJawsÓ (movie theme, John Williams), ÒIn the Hall of the Mountain KingÓ (from ÒPeer GyntÓ by Grieg)  
To energize students or have them physically move  Select highly rhythmic music in a major key or any upbeat music or song. Beats per minute should be 70-140.  ÒShake It UpÓ (The Cars), ÒFun, Fun, FunÓ (Beach Boys), ÒBonanzaÓ (TV theme), ÒListen to the MusicÓ (Doobie Brothers), ÒWe Got the BeatÓ (Go-Gos)  
To relax or calm students, to use for stretching, or activities such as reflection, journaling, and visualization  Beats per minute should be 40-60.  ÒThe Lake HouseÓ (movie theme; Rachel Portman), ÒChariots of FireÓ (Vangelis), ÒThe ReiversÓ (movie theme), ÒPeaceful, Easy FeelingÓ (Eagles)  
To celebrate successes  ÒOlympic FanfareÓ (John Williams),  
or to honor students  ÒIn the ZoneÓ (David Banner), ÒI Just Want to CelebrateÓ (Rare Earth), ÒCelebrateÓ (Three Dog Night), ÒCelebrationÓ (Kool and the Gang), ÒWe Are the ChampionsÓ (Queen)  
To end class  Select upbeat, fun, or funny music; lyrics may pertain to leaving.  ÒNever Can Say GoodbyeÓ (Gloria Gaynor), ÒSo Long, FarewellÓ (from  

Class Activity  Musical Qualities To Look For In Song Selection  Song Examples  
ÒThe Sound of MusicÓ), ÒWho Let the Dogs OutÓ (Baja Men), ÒHappy TrailsÓ (Roy Rogers/Dale Evans)  
For other purposes: Beginning of class, Encouragement, Motivation, and Support (music could be Funny, and therefore stress-reducing).  
Table 3.1. Source: adapted from Elder (n.d.) ÒUsing Brain-Friendly Music in the Classroom.Ó 


Using Music in Arts-Integrated Curriculum 
An arts integrated lesson plan will be similar to a regular lesson plan, with the exception that it will have a place for both the arts learning objectives as well as the objectives for the content area and will allow students the opportunity to construct understanding through both disciplines. 
Consider that you have to create a lesson plan to celebrate the Martin Luther King, Jr. holiday. It is, of course, nice to add a song somewhere in the lesson, perhaps a song from the Civil Rights Movement. This does not make the lesson integrated, but rather an Arts-Enhanced-Curriculum as discussed above. Integration requires that there be music objectives as well as subject area objectives, and that both subjects are treated equally. Keep in mind that any lesson can be made into an arts-integrated one, by simply delving in deeper to the art form itself to find structural details and meaning from which to draw. To make a lesson integrated, it is necessary to include social science or history goals and objectives as well as musical information, goals and objectives. For example, including information about the song that incorporates the music itself (form, timbre, melody, rhythm, etc.), while discussing the genre of civil rights songs itself. 
To demonstrate a deeper understanding of the tenets and issues of Civil Rights, social science connections can be made not only to slavery in the previous century, but to the pro-union struggle in the earlier part of the 20th century. Students could demonstrate their understanding of Martin Luther KingÕs leadership and the famous marches of the 60s through song by recreating the march on Washington, DC while singing a civil rights song (ÒWe Shall Not Be Moved,Ó ÒThis Little Light Of Mine,Ó ÒWe Shall Overcome,Ó etc.). The types of songs used for demonstrations could be analyzed, including their roots in the pro-union movement, gospel and religious music, and/or the use of call and response in the songs, which dates back to slavery and early African-American culture, and particularly how music was used during the protests. A follow-up might focus on blues, jazz and other genres inspired by the music of the Civil Rights movement. 
Activity A 
Try this: Which one of these examples represents Arts as Curriculum, Arts-Enhanced Curriculum, and an Arts-Integrated Curriculum? 
. 
Students sing a song they learned in music class for a school assembly 

. 
Students have to explain how sequential groupings work in math and music 

. 
Students learn the song Ò50 Nifty United StatesÓ 


Now try this: Students complete a unit on the lifecycle of a caterpillar. 
. 
How might this lesson be changed to reflect an Arts-Enhanced lesson? Arts-integration? Arts as Curriculum? 

. 
Create your own examples of the three types of curriculum. 


Music Integration with Core Subjects: Vocabulary, Concepts, and Learning Standards 
In order to successfully create arts integrated lessons, begin with the state learning standards in the content area in which you are working, then consider the art form you will be using. Explore vocabulary that may help you to work between the two disciplines. Below are two examples of vocabulary lists from Education Closet, a website dedicated to integration and innovation in teaching. 
Activity B 
Try This: Review the vocabulary lists below (Table 3.2; Table 3.3). Identify which terms work best for music instruction. Select three of the terms from either list and give an example of how you might use that term to illustrate music concepts in addition to either a math or literacy concept. 
Table 3.2. Arts Literacy: Common Vocabulary 
Grade  Shared Vocabulary Between Literacy and The Arts  
K  Illustrations, illustrator, listen, setting, space, title, beginning, end.  
1  Audience, character, collaborate, connections, expression, fluent, phrase, plot, segment, sequence.  
2  Analyze, compare, contrast, expression, genre, introduction, point of view, rhythm.  
3  Audience, comparative, dialogue, effect, line, mood, narrator, plot, point of view, scene, stanza, theme.  
4  Animations, categorize, drama, elements, meter, narration, pose, stage direction, theme, verse.  
5  Analyze, compare, conclude, contrast, dialect, dialogue, evaluate, expression, fluent, influence, interpret, mood, multimedia, perspective, perspective, reflection, theme, tone, voice.  
6  Bias, convey, elaborate, interpret, multimedia, perceive, point of view.  
7  Alternate, analyze, audience, categorize, collaborate, composition, concept, embellish, exposure, format, function, interact, medium, mood, segment, structure, tone, unique.  
8  Analyze, bias, characterization, elaborate, evaluate, imagery, point of view, style, symbolism, theme.  
9 & 10  Bias, coherence, clarity, comedy, character motivation, diction, dynamic, monologue, mood, plot structure, purpose, soliloquy, theme, tone, tragedy, digital media, quality.  
11 & 12  Context, diction, digital media, nuance, perspective, satire, structure, style, subplot, subtle, theme, voice.  
Table 3.2. Source: by Susan Riley (2012) from Education Closet website. Table 3.3. Math and the Arts: Common Vocabulary 


Grade  Shared Vocabulary between Literacy and the Arts  
K  Compare, opposite, before, different, similar, object, measure, pattern, curves, slide.  
1  Similar, object, symbol, group, pattern, compare, half, describe, side, size, parallel, curves, slide, turn.  
2  Form, sequence, pattern, group, interpret, symbol, slide, reflect, turn, measure, three-dimensional, line of symmetry, intersect.  

Grade  Shared Vocabulary between Literacy and the Arts  
3  Expression, form, product, length, symbol, combinations, weight, angle, symmetry, line, dimensions.  
4  Comparison, expression, produce, symmetry, measure, length, interpret, frequency, distance, lines.  
5  Patterns, form, expression, variation, inverse, sequence, symbol, product, ratio, part, whole, quarter, half, organize, arrange, scale, line, distance, vertical, diagonal, horizontal, symmetry, transformation.  
6  Scale, measure, compose, symbol, expression, grid, collection, interval, simulation, symmetry.  
7  Point, area, proportion, analyze, compose, notation, expression, value, range, scale, drawings.  
8  Expression, value, notation, frequency, non-linear, rigid, symmetry.  
9 & 10  Expression, notation, properties, model, measure, acceleration, scale, direction, structure, value, range, vary, inverse, frequency.  
11 & 12  Linear, range, oblique, measure, symmetry, composition, variation, velocity, arc, chord.  
Table 3.3. Source: by Susan Riley (2012) from Education Closet website. 


Generating Ideas for Integrated Lessons 
The following grid (Table 3.4; Table 3.5 (blank)) offers a process for generating integration ideas using music, particularly in making connections across the disciplines. The first row of the grid contains an example of how to generate ideas from a musical concept. 
Concept(s)/Grade 
Begin by selecting one music concept to work with. In the first column of the grid below, the word ÒstaffÓ 
is written. The lesson is to teach the musical staff to 2nd grade students. 
Objectives 
What are your main objectives for the lesson? What should children be able to do by the end of the lesson 
that they couldnÕt do at the beginning? Note: ÒSWBATÓ standsfor ÒStudents WillBe AbleTo.Ó 
Activities 
What activities could you use to teach the staff? Where would you begin? You might begin by teaching the line and space notes for the treble staff (EGBDF and FACE) and teaching the mnemonics that accompany those note names (i.e. E-Every; G-Good; B-Boy; D-Deserves; F-Fudge). Even at this point, writing the lines on the board, on a smart board, PPT, or even making lines on the floor with tape can be a visual accompaniment to the lesson, and help students learn through body movement as well as visual learning. 
Integration Ideas 
How might you integrate this concept using different core subject areas? What higher order thinking skills, or vocabulary? Look at the second grade Vocabulary grid above from Education Closet concerning math and the arts and Music and Literacy and select the most appropriate terms to apply to the lesson: 
. 
(Math and the Arts) Form, Sequence, Pattern, Group 

. 
(Arts Literacy) Analyze, Compare, Contrast 


Common Core Learning Standards or State Performance Standards 
Now refer to the state website to look for the appropriate common core standards or state performance standards. 
Table 3.4. Idea Generator: Concept, Objectives, Activities, Integration, and Standards 

Learner/  
Music Concept Grade Level  Objectives  Activities  Integration (connections, constructivism, creative process, understanding)  Common Core Standard/State Performance Standards  
Ex. Concept: Reading the Music Staff Grade: 2nd  SWBAT identify pitches on lines of the treble staff SWBAT analyze the correlation of skipping and sequential regarding the pitches on the treble staff. SWBAT understand correlations across disciplines of math, literacy and music between sequential movement and skipping movement  Review (or teach) the pitches of the treble staff, first using sequential alphabet letters, then using the acronyms EGBDF and FACE. Create huge lines of treble staff on the floor using masking tape. Mark each line or space with large letters for each note. Movement: Have students physically move across the floor staff, first sequentially and then skipping line to line and space to space, reciting the letters as they go.  Literacy: Analyze the letters EGBDF as a mnemonic for ÒEvery Good Boy Deserve Fudge.Ó Brainstorm, having students create their own acronyms for EGBDF and FACE. Compare and contrast the pitch names on the staff with the letters of the alphabet. Which direction do they go? What are the differences between letters of the alphabet and music pitch names? Math: Discuss the form of the staff. Is there a pattern? What is it? Does it alternate (skip)? Is it sequential (all in a row)? Math, Music and Literacy: (EGBDF). Have students count sequentially. Sequence the letter names by saying them in a row (EFGABC). Then create a pattern by skipping every other letter of the alphabet (B.D-F or A-C-E). Then correlate with math by switching to numbers. Practice grouping by 2s.  Bodily-Kinesthetic, Visual.spatial/Creating, Performing, Participating  
1. Concept: Rhythm: Eighth and  
Music Concept Grade Level  Objectives  Activities  Integration (connections, constructivism, creative process, understanding)  Learner/ Common Core Standard/State Performance Standards  
Quarter notes Grade: Kindergarten  
2. Melody: Pitch Grade: 4th  
3. Timbre: Voice Grade: 1st  
Table 3.5. Idea Generator (Blank): Concepts, Activities, Materials, and Integration 


Music Concept Grade  Objectives  Activities  Integration (connections, constructivism, creative process, understanding)  Learner/ Common Core Standard/State Performance Standards  
1.  
2.  
3.  

An Example: Integrating Music in Language Arts and Social Studies ÒGoober PeasÓ 
Many older songs offer excellent material for integration. For example, the song ÒGoober PeasÓ provides 
students a very inside look at the life of a Confederate soldier during the Civil War. In this case, both the music and lyrics are highly informative, as is the situation in which the song was sung, lending itself to integration through three areas: music, language arts, and social sciences. 
Materials: 
Timeline: CivilWar history timeline including various battles, ShermanÕs March, etc. Song: ÒGoober PeasÓ Text: The Personal Story of Life as a Confederate Soldier, ÒThe Letters of Eli LandersÓ http://www.gacivilwar.org/story/the-personal-story-of-life-as-a-confederate-soldier 
Goober Peas Southern U.S. folk song, 1866 Sung by Confederate soldiers during the Civil War 

2. When a horse-man passes, the soldiers have a rule 
To cry outtheir loudest, ÒMister hereÕs your mule!Ó 
But another custom, enchanting-er than these, Is wearing out your grinders, eating goober peas. (refrain) 3. Just before the battle, the General hears a row 
He says, ÒThe Yanks are coming, I hear their rifles nowÓ 
He turns around in wonder and what dÕya think he sees? 
The Georgia militia, eating goober peas. (refrain) 
4. I think my song has lasted almost long enough 
The subjectÕs interesting but the rhymes are mighty tough 
I wish the war was over so free from rags and fleas WeÕd kiss our wives and sweethearts and gooble goober peas. (refrain) 
Integration Process Questions 
How might you integrate this song beyond that of ÒArts as EnhancementÓ? What learning principles will 
you use? How will students be engaged? Demonstrate their understanding? What will be the processes of creation? What connections to other parts of the curriculum can be made? Are the standards present for 
both the artand the subjectarea? Go through Silverstein &LayneÕs (2012)Arts Integration Checklistbelow 
to see how to incorporate an integrated level of understanding to the lesson: 
Approach to Teaching 
. 
Does the lesson contain learning principles of Constructivism (actively built, experiential, evolving, collaborative, problem-solving, and reflective)? 

Understanding 

. 
Are students engaged in constructing and demonstrating understanding knowledge rather than memorizing and reciting? 

Art Form 

. 
Are the students constructing and demonstrating their understandings through an art form? 

Creative Process 

. 
Are students engaged in a process of creating something original as opposed to copying or parroting? 

. 
Will the students revise their products? 

Connects 

. 
Does the art form connect to another part of the curriculum or a concern/need? 

. 
Is the connection mutually reinforcing? 

Evolving Objectives 

. 
Are there objectives in both the art form and another part of the curriculum or a concern/need? 

. 
Have the objectives evolved since the last time the students engaged with this subject matter? Have the objectives evolved since the last time the students engaged with this subject matter? Have the objectives evolved since the last time the students engaged with this subject matter? (Silverstein & Layne, 2014). 


Analysis: Vocabulary and Concepts 
YouÕllfind anabundance of material to integrate andconnect after analyzing both the music, lyrical/poetic aspects, and social contexts. The musical forms, phrases, harmonies and the poetic structure reveal a great deal of material apart from the content of the lyrics (Table 3.6). 
Table 3.6. Music Vocabulary and Concepts 
Music  Poetry/Lyrics  
. Dotted rhythm . Verse + refrain . 4 phrases per verse 4 verses in the song  . Long-short long-short (trochee stressed-unstressed) . Ballad style . Rhyme scheme (AABB) Narrative story telling/ballad  

Social Studies 
Setting: Civil War, soldiers resting on the roadside while waiting for orders for the next confrontation. Date Written: 1866. Singers: Popular in the South among Confederate Soldiers (losing the war). Sentiment: Expresses the living conditions of Confederate soldiers and the public, as the war was 
lost. ShermanÕs troops laid waste to much of Georgia, cutting off food supplies. 
Song Vocabulary: Students may not be familiar with these terms: Goober Peas-another name for boiled peanuts. Eaten by Confederate soldiers during the war when rail lines were cut off, making food and rations scarce. Messmate-a person/friend in a military camp with which one regularly takes meals. 
Grinders-teeth. Row-an argument or fight (rhymes with ÒcowÓ). Georgia Militia-a militia organized under the British that fought the Union during the Civil War. 
They foughtin ShermanÕs devastating ÒMarch to the SeaÓ and in the last battle of the CivilWar at 
the Battle of Columbus on the Georgia-Alabama border. Yanks-Refers to ÒYankeesÓ or Union soldiers of the North. Rags and fleas-Tattered clothing and poor health conditions. Activities: 
Sing the song ÒGoober Peas;Ó Read some of the letters of Eli Landers. 
Questions to think about (Historical perspectives of soldiers) 
. 
What conditions did the soldiers have to endure? 

. 
What was happening towards the end of the Civil War? 

. 
How do you think they felt during this time? (i.e., anxiousness, anticipation, weariness while waiting by the road). 

. 
Overall, what do the lyrics express on behalf of the Confederate soldiers? 

. 
What does the reference to the Georgia Militia mean in terms of the fighting? Ideas for Integration: 

. 
Constructivism: Analyze the music, text, and history (timeline). Reflect what it would be like to be a soldier in the Confederacy during the beginning, middle, and end of the Civil War. Problem Solve as to how to obtain food after the railroad lines were cut off, strategize as to earlier successes during the war. 

. 
Student Engagement: (historical perspectives). Experience: learn and sing the song. Divide into groups and read Eli Landers letters from different years comparing changes in attitude for a confederate soldier over time from the beginning of the war to the end of the war. 

. 
Art Form: Analyze by comparing Eli LandersÕ letters to the lyrics of the song. What are the differences in historical facts? Sentiment? In terms of the song itself, explore the meaning of the music itself apart from the lyrics-sing the melody of the song on a neutral syllable. What does the melody remind you of? What kind of emotion do you hear in the melody, rhythm and phrasing? Does it seem to complement the lyrics or oppose them? Why might this be the case? 

. 
Creative Process: Work collaboratively to create further verses of the song or write Òletters homeÓthat willexpress the feelings ofsoldiers facingdefeat. Read the letters fromhome along 

with singing the new verses of the song. 

. 
Objectives (see below): 


What Learning Standards or Objectives can you incorporate for this lesson for each of the following? 
1. Language Arts/Social Studies 
a. 
Language Arts 3: Use knowledge of language and its conventions when speaking, reading, or listening. 

b. 
Writing 3: Write narratives to develop real or imagined experiences or events using effective technique, descriptive details, and clear event sequences. 

c. 
Reading 2: Determine a theme of a story, drama, or poem from details in the text; summarize the text. 


2. Music National Standards 
a.
 1: Singing, alone and with others, a varied repertoire of music. 

b.
 6: Listening to, analyzing, and describing music. 

c. 
8: Understanding relationships between music, the other arts, and disciplines outside the arts. 


Additional Songs for Integrating History/Social Studies Other examples include songs that are informative and contain a long narrative or historical information for 
students. For example, the song ÒChristofo ColumboÓ chronicles much of the famed voyage including 
detailed geographic references in a fun and light song. 
Christofo Columbo (Christopher Columbus) Ring Lardner, 1911 

To the Kings and Queens of Europe, Columbus told his theory, They simply thought him crazy, and asked him this here query, How could the earth stand up if round, it surely would suspend, For answer, CÕlumbus took an egg and stood it on its end. 
Refrain 
In Fourteen Hundred and Ninety-two, Õtwas then Columbus started, From Pales on the coast of Spain to the westward he departed, His object was to find a route, a short one to East India, Columbus wore no whiskers, and the wind it blew quite windy. 
Refrain 
When Sixty days away from land, upon the broad Atlantic, The sailors they went on a strike which nearly caused a panic, They all demanded eggs to eat for each man in the crew, Columbus had no eggs aboard, but he made the ship lay too. 
Refrain 
The hungry crew impatient grew, and beef-steak they demanded, Equal to the emergency, Columbus then commanded 
That evÕry sailor who proves true, and his duty never shirks, 
Can have a juicy porterhouse, ÒIÕll get it from the bulwarks.Ó 
Refrain 
Not satisfied with steak and eggs, the crew they yelled for chicken, Columbus seemed at a loss for once, and the plot it seemed to thicken, The men threatened to jump overboard, Columbus blocked their pathway, 
And cried: ÒIf chicken you must have, IÕll get it from the hatchway.Ó 
Refrain 
The sailors now so long from home with fear became imbued, On the twelfth day of October their fears were all subdued, 
For after Ninety days at sea, they discovered AmericaÕs shores, 
And quickly made a landing on the Isle of Salvador. 
Refrain 
When Johnny Comes Marching Home Again Patrick Gilmore, 1863 American Civil War song 

Johnny Has Gone for a Soldier Traditional English folk song popular during the Revolutionary War 

Music and Language Arts 
Of all of the content area relationships with music, language arts and music have one of the closest bonds. This bond is rooted within the inseparable relationship between lyrics and music that has existed for thousands of years. People in across countless cultures have chanted or sung poetry for all types of human rituals, ceremonies and for entertainment. When we listen to a song, a musical phrase usually accompanies a phrase of lyrics; a verse or refrain emerges from a short poem. For centuries, ballads, and epics were all sung, as were Biblical chants and Vedic hymns. Long stories and epic tales used music to draw in the 
audience and to help the reciterÕs memorization. 
In addition, there is an intrinsic relationship in the discrimination of phonemic sounds and musical sounds for children learning to read. Language and music are intertwined to the point where there is evidence of a connection in the brain between phonemic sound discrimination and musical sound discrimination. In a 1993 study, for example, Lamb and Gregory examined the correlation between phonemic and musical 
sound discrimination for children reading in their first year of school and discovered that a childÕs ability 
to discriminate musical sounds is directly related to reading performance, primarily due to their awareness of changes in pitch. 
This close relationship allows for multiple avenues for integration. The use of music to build characters through sound expression; create tension in the narrative; highlight important moments in the plot, and so forth, are examples of the high compatibility between words and music. 
Creating a ÒSound CarpetÓ 
Since music and language have such a close relationship, one of the easiest ways to begin is to combine the two. Creating a sound carpet (it refers to extensive and liberal use of music, sound effects, and character leitmotifs in the performance of a narrative or story) entails taking a story and adding sound effects, leitmotifs, instruments, vocal sounds, body percussion, and actors and/or a narrator, in order to bring literature to life. The goal of a leitmotif (it is a recurrent theme throughout a musical or literary composition, associated with a particular person, idea, or situation) is to help the listener identify the main characters and give each a very short musical pattern, so that every time their name is mentioned, someone plays that pattern. Also, sound effects can be added to enhance the action or bring a fuller meaning or experience. For example, if the story introduces a chiming bell, hit a bell or, for more advanced or older students, play a bell peal on the glockenspiel. Folk tales and fairy tales from around the world are excellent sources for this type of activity. 
Characters and Leitmotifs 
To create a sound carpet, begin by making a list of the main characters in the story. For example, the story The Princess and the Frog has three main characters-the King, Princess and Frog. Sample leitmotifs might look like this: 
King: (temple blocks and bass xylophone) q ioq q Princess: (glissando on glockenspiels) Frog: scrape guiro; hit hand drums q q q (say Òribbit!Ó) 
Help students create a short phrase or leitmotif for each of the main characters-think of Star WarsÕ Darth Vader theme as an example. Every time the name is introduced in the story, their leitmotif should be played. To help the creative process, you might give students a short, simple rhythm to work with to create the motif. Then play the leitmotif on an instrument that helps describe that character. The KingÕs leitmotif, for example, might be 4 quarter notes played on a trumpet sound on a keyboard, or using an interval of a 5th on any instrument to sound regal and stately. 
Sound Effects 
Next identify locations in the story where sound effects can be used. A running stream could be a glissando on a xylophone; thunder can be played with drums; footsteps with a woodblock, etc. 
Body Percussion and Vocals 
Then add body percussion (clapping, stomping) or vocal sounds (moans for wind, yells and whoops) to increase the creativity and excitement level in the story. 
Introduction and Finale 
Add a short song with lyrics that are based on the story, to be sung and played by everyone at the opening and closing of the story. 
Finally, assign a narrator, speaking or acting parts, and along with your instruments and sound effects, you have a complete performance that incorporates music composition and creativity along with language arts and theater. 
RERERENCES 
Bakan, M. (2011). World music: Traditions and transformations. New York, NY: McGraw-Hill. 
Elder, J. (n.d.). Using brain-friendly music in the classroom. Retrieved from https://letsgetengaged.wikispaces.com/file/view/Music.pdf 
Riley, S. (2012). Shake the sketch: An arts integration workbook. Westminster, MD: Author. 
Silverstein, L., & Layne, S. (2014). What is arts integration? Retrieved from http://artsedge.kennedy.center.org/educators/how-to/arts-integration/what-is-arts-integration 

SUGGESTED ACTIVITIES 
Giles, A. M., & Frego, R. D. (2004). An inventory of music activities used by elementary classroom 
teachers: An exploratory study. UPDATE: Applications of Research in Music Education, 22(2), 13-22. Brass instruments and pitch. (n.d.). Retrieved from http://artsedge.kennedy.center.org/educators/lessons/grade-3-4/Brass_Instruments_and_Pitch 
Make every music lesson a treasured memory. (2013). Retrieved from http://www.makingmusicfun.net/ 
Ms. GarrettÕs music lessons and projects. (2018). Retrieved from http://www.musictechteacher.com/music_lessons/music_lessons.htm Music education lesson plans by category. (2015). Retrieved from http://www.teach.
nology.com/teachers/lesson_plans/music/ 
Music games and activities. (20009). Retrieved from http://www.gamequarium.org/dir/Gamequarium/Music/ SFS kids fun and games with music. (2014). Retrieved from http://www.sfskids.org/ Teoria: Music theory web. Retrieved from http://www.teoria.com/en/tutorials/ Tulga, P. (2014). Music activities and arts integration lessons. Retrieved from 
http://www.philtulga.com/resources.html 

TECHNOLOGY 
Burns, A. (2014). iPads in the elementary classroom: Teacher tools. Retrieved from http://mustech.net/2014/07/ipads-in-the-elementary-music-classroom-teacher-tools/ 
Create play and print beautiful sheet music. (2015). Retrieved from http://musescore.org Finale notepad: Your free introduction to music notation software. (2015). Retrieved from http://finalemusic.com/notepad 
Garret, K. (2013). Welcome to music tech teacher. Retrieved from http://www.musictechteacher.com/ Learning with noteflight. (2015). Retrieved from http://www.noteflight.com Welcome to the music interactive web site. (2014). Retrieved from http://www.themusicinteractive.com/ What is taught in the music classroom. (n.d.). Retrieved from http://www.teach.
nology.com/teachers/subject_matter/music/ 
ADDITIONAL SOURCES 
WEBSITES 
The larges classical music archive in the world. (2015). Retrieved from http://www.classicalarchives.com 
Light, I. (2006). Resources for teachers and some fantastic ideas about music and the curriculum. Retrieved from http://www.childrensmusic.org 
Mickela, T. (2011). Music and student development. Retrieved from http://www.childrensmusicworkshop.com/advocacy/studentdevelopment/ 
Music K-8 journal web site. Retrieved from http://www.musick8.com/ 
OÕDonnel, L. (1999). Music power. Retrieved from http://www.cerebromente.org.br/n15/mente/musica.html 
Pappalardo, G. (2010). Using music in the classroom to inspire creative expression. Retrieved from http://www.edutopia.org/blog/music-classroom-gaetan-pappalardo 
QuaverÕs marvelous worldof learning: Seriously fun music. (2017). Retrieved from 
http://www.quavermusic.com/infocenter/ 
Song, A. (2010). Elementary teachers integrate music activities into regular mathematics lessons: Effects on studentsÕ mathematicalabilities. Retrieved from http://eric.ed.gov/?id=EJ1018326 Subotnic, M. (2010). Morton subotonicÕs creating music. Retrieved from http://creatingmusic.com Teaching tip: Music in the classroom. (2012). Retrieved from 
https://ethemes.missouri.edu/themes/1949?locale=en 
Using music in the ESL classroom. (2012). Retrieved from https://www.englishclub.com/teaching.tips/music-classroom.htm Welcome to artsalive.ca music. (2015). Retrieved from http://artsalive.ca/en/mus 
BOOKS AVAILABLE IN DALTON STATE COLLEGE LIBRARY 
Athey, M., & Hotchkiss, G. (1982). Complete handbook of music games and activities for early childhood. West Nyack, NY: Parker Publishing Company. 
Campbell, P. S., & Scott-Kassner, C. (1995). Music in childhood: From preschool through the elementary grades. New York & London: Schirmer Books. 
Greata, J. (2006). An introduction to music in early childhood education. Clifton Park, NY: Thomson Delmar Learning. 
Mark, M. L., & Madura Ward-Steinman, P. (2010). Music education in your hands: An introduction for future teachers [eBook]. New York, NY: Routledge. 
Markel, R. (1983). Music for your child: A complete guide for parents and teachers. New York, NY: Facts On File. 

VIDEOS 
Curriculum connections: Using music to help children learn-Program for teachers [Video file]. (2012). Retrieved from https://youtu.be/__dU1djVPeQ 
Everywhere man: Integrating music and literacy through song writing [Video file]. (2012). Retrieved from https://youtu.be/2ikQJN_PIeU 
Integrating music and movement with literacy [Video file]. (2012). Retrieved from https://youtu.be/YoOb3JSDAUo 
Learning through music and art [Video file]. (2013). Retrieved from https://www.youtube.com/watch?v=zKZAfDcU6BQ 
Math music integration for first grade [Video file]. (2014). Retrieved from https://youtu.be/Dd59pah1e9k 
Music in the general education classroom [Video file]. (2011). Retrieved from https://youtu.be/2ikQJN_PIeU 
Teacher uses music to make math fun, cool [Video file]. (2013). Retrieved from https://www.youtube.com/watch?v=lCt7Lj5fL9Y 

SCHOLARLY JOURNAL ARTICLES 
Burns, A. (2006). Integrating technology into your elementary music classroom. General Music Today, 
20(1), 1-6. Howell, A. C. (2009). Curricular pillars in the elementary general music classroom. Music Educators Journal, 95(3), 37-41. 
Kerstetter, K. (2009). Educational applications of podcasting in the music classroom. Music Educators 
Journal, 95(4), 23-26. Moore, P. (2009). Beyond folk: Using contemporary music in the elementary classroom. Teaching Music, 16(5), 57. 
Music every day: Transforming the elementary classroom. (2002). Music Educators Journal, 89(2), 69. Prescott, J. O. (2005). Music in the classroom. Instructor, 114(5), 29,30,32,34,67,76. 



CHAPTER FOUR VISUAL ARTS SELECTED READING 
Visual arts are art forms such as ceramics, drawing, painting, sculpture, printmaking, design, crafts, photography, video, filmmaking, and architecture (UVA, n.d.). Many artistic disciplines (performing arts, conceptual art, textile arts) involve aspects of the visual arts as well as arts of other types. Visual arts are for visual purposes in nature; however, visual arts also include applied arts such as industrial design, graphic design, fashion design, interior design, decorative art, calligraphy, jewelry design, and wood craft (The Different Forms of Art, n.d.). In this chapter, the following visual arts forms are explored: drawing, painting, printmaking, calligraphy, photography, filmmaking, computer art, and sculpture. Drawing 
Drawing is a means of making an image, using any of a wide variety of tools and techniques. It generally involves making marks on a surface by applying pressure from a tool or moving a tool across a surface using dry media such as graphite pencils, pen and ink, inked brushes, wax color pencils, crayons, charcoals, pastels, and markers. Digital tools that simulate the effects of these are also used. The main techniques used in drawing are: line drawing, hatching, crosshatching, random hatching, scribbling, stippling, and blending. An artist who excels in drawing is referred to as a draftsman or draughtsman. 
Drawing goes back at least 16,000 years to Paleolithic cave representations of animals such as those at Lascaux in France and Altamira in Spain. In ancient Egypt, ink drawings on papyrus, often depicting people, were used as models for painting or sculpture. Drawings on Greek vases, initially geometric, later developed to the human form with black-figure pottery during the 7th century BC (History of Drawing, n.d.). With paper becoming common in Europe by the 15th century, drawing was adopted by masters such as Sandro Botticelli, Raphael, Michelangelo, and Leonardo da Vinci who sometimes treated drawing as an art in its own right rather than a preparatory stage for painting or sculpture (Drawing, n.d.). 
Painting 
Painting is the practice of applying paint, pigment, color or other medium to a solid surface. The medium is commonly applied to the base with a brush, but other implements, such as knives, sponges, and airbrushes, can be used. Painting taken literally is the practice of applying pigment suspended in a carrier (or medium) and a binding agent (a glue) to a surface (support) such as paper, canvas or a wall. However, when used in an artistic sense it means the use of this activity in combination with drawing, composition, or other aesthetic considerations in order to manifest the expressive and conceptual intention of the practitioner. 
Painting is also used to express spiritual motifs and ideas. Sites of this kind of painting range from artwork depicting mythological figures on pottery to The Sistine Chapel to the human body itself. Like drawing, painting has its documented origins in caves and on rock faces. The finest examples, believed by some to be 32,000 years old, are in the Chauvet and Lascaux caves in southern France. In shades of red, brown, yellow and black, the paintings on the walls and ceilings are of bison, cattle, horses and deer. 
Paintings of human figures can be found in the tombs of ancient Egypt. In the great temple of Ramses II, Nefertari, his queen, is depicted being led by Isis (History of Painting, n.d.) (Figure 4.1). The Greeks contributed to painting but much of their work has been lost. One of the best remaining representations are the Hellenistic Fayum mummy portraits. Another example is mosaic of the Battle of Issus at Pompeii (Figure 4.2), which was probably based on a Greek painting. Greek and Roman art contributed to Byzantine art in the 4th century BC, which initiated a tradition in icon painting. 


The Renaissance Painting and Painters 
Apart from the illuminated manuscripts produced by monks during the Middle Ages, the next significant contribution to European art was from Italy's renaissance painters. From Giotto in the 13th century to Leonardo da Vinci and Raphael at the beginning of the 16th century, this was the richest period in Italian art as the chiaroscuro techniques were used to create the illusion of 3-D space (Painting in Renaissance Art, 
n. d) (Figure 4.3). Painters in northern Europe too were influenced by the Italian school. Jan van Eyck from Belgium, Pieter Bruegel the Elder from the Netherlands and Hans Holbein the Younger from Germany are among the most successful painters of the times. They used the glazing technique with oils to achieve depth and luminosity. 
Figure 4.3. Raphael: Spasimo (1514-1516) The 17th century witnessed the emergence of the great Dutch masters such as the versatile Rembrandt who was especially remembered for his portraits and Bible scenes, and Vermeer who specialized in interior scenes of Dutch life (Figure 4.4). 
Figure 4.4. Rembrandt: The Night Watch The Baroque started after the Renaissance, from the late 16th century to the late 17th century. Main artists of the Baroque included Caravaggio, who made heavy use of tenebrism. Peter Paul Rubens was a flemish painter who studied in Italy, worked for local churches in Antwerp and also painted a series for Marie de' Medici. Annibale Carracci took influences from the Sistine Chapel and created the genre of illusionistic ceiling painting. Much of the development that happened in the Baroque was because of the Protestant Reformation and the resulting Counter Reformation. Much of what defines the Baroque is dramatic lighting and overall visuals (Hills, 2011). 
Impressionist Paintings 
Impressionism began in France in the 19th century with a loose association of artists including Claude Monet (Figure 4.5), Pierre-Auguste Renoir and Paul CŽzanne who brought a new freely brushed style to painting, often choosing to paint realistic scenes of modern life outside rather than in the studio. This was achieved through a new expression of aesthetic features demonstrated by brush strokes and the impression of reality. They achieved intense color vibration by using pure, unmixed colors and short brush strokes. The movement influenced art as a dynamic, moving through time and adjusting to new found techniques and perception of art. Attention to detail became less of a priority in achieving, whilst exploring a biased view of landscapes and nature to the artists eye (Impressionism, n.d.; Impressionism in Visual Arts, n.d.). 

Post-Impressionist Paintings 
Towards the end of the 19th century, several young painters took impressionism a stage further, using geometric forms and unnatural color to depict emotions while striving for deeper symbolism. Of particular note are Paul Gauguin (Figure 4.6), who was strongly influenced by Asian, African and Japanese art, Vincent van Gogh (Figure 4.7), a Dutchman who moved to France where he drew on the strong sunlight of the south, and Toulouse-Lautrec, remembered for his vivid paintings of night life in the Paris district of Montmartre (Post Impressionism, n.d.). 

Figure 4 .7. Vincent van Gogh: The Church at Auvers (1890) 

Paintings of Symbolism, Expressionism and Cubism 
Edvard Munch, a Norwegian artist, developed his symbolistic approach at the end of the 19th century, inspired by the French impressionist Manet. The Scream (1893), his most famous work, is widely interpreted as representing the universal anxiety of modern man. Partly as a result of Munch's influence, the German expressionist movement originated in Germany at the beginning of the 20th century as artists such as Ernst Kirschner and Erich Heckel began to distort reality for an emotional effect. In parallel, the style known as cubism developed in France as artists focused on the volume and space of sharp structures within a composition. Pablo Picasso and Georges Braque were the leading proponents of the movement. Objects are broken up, analyzed, and re-assembled in an abstracted form. By the 1920s, the style had developed into surrealism with Dali and Magritte (Modern Art Movements, n.d.). 
Printmaking 
Printmaking is creating, for artistic purposes, an image on a matrix that is then transferred to a two-dimensional (flat) surface by means of ink (or another form of pigmentation). Except in the case of a monotype, the same matrix can be used to produce many examples of the print. 
Historically, the major techniques (also called media) involved are woodcut, line engraving, etching, lithography, and screen printing (serigraphy, silk screening) but there are many others, including modern digital techniques. Normally, the print is printed on paper, but other mediums range from cloth and vellum to more modern materials. Major printmaking traditions include that of Japan (ukiyo-e). Prints in the Western tradition produced before about 1830 are known as old master prints. In Europe, from around 1400 AD woodcut, was used for master prints on paper by using printing techniques developed in the Byzantine and Islamic worlds. Michael Wolgemut improved German woodcut from about 1475, and Erhard Reuwich, a Dutchman, was the first to use cross-hatching. At the end of the century Albrecht Der brought the Western woodcut to a stage that has never been surpassed, increasing the status of the single-leaf woodcut (The Printed Image in the West, n.d.). 
In China, the art of printmaking developed some 1,100 years ago as illustrations alongside text cut in woodblocks for printing on paper (Figure 4.8). Initially images were mainly religious but in the Song Dynasty, artists began to cut landscapes. During the Ming (1368-1644) and Qing (1616-1911) dynasties, the technique was perfected for both religious and artistic engravings (The History of Engraving in China, n.d.) (Figure 4.9). 
Figure 4.8. The Chinese Diamond Sutra (The World's Oldest Printed Book (868 CE)) 


Woodblock printing in Japan (Japanese:..., moku hanga) is a technique best known for its use in the ukiyo-e artistic genre; however, it was also used very widely for printing books in the same period. Woodblock printing had been used in China for centuries to print books, long before the advent of movable type, but was only widely adopted in Japan surprisingly late, during the Edo period (1603-1867). Although similar to woodcut in western printmaking in some regards, moku hanga differs greatly in that water-based inks are used (as opposed to western woodcut, which uses oil-based inks), allowing for a wide range of vivid color, glazes and color transparency (Figure 4.10). 
Figure 4.10. Hokusai: Red Fuji southern wind clear morning from Thirty-six Views of Mount Fuji 

Calligraphy 
Calligraphy is a visual art related to writing. It is the design and execution of lettering with a broad tip instrument, brush, or other writing instruments (Mediaville, 1996). A contemporary calligraphic practice can be defined as "the art of giving form to signs in an expressive, harmonious, and skillful manner" (Mediaville, 1996, p. 18). 
Modern calligraphy ranges from functional inscriptions and designs to fine art pieces where the letters may or may not be readable (Mediaville, 1996). Calligraphy continues flourishing in the forms of wedding invitations and event invitations, font design and typography, original hand-lettered logo design, religious art, announcements, graphic design and commissioned calligraphic art, cut stone inscriptions, and memorial documents. It is also used for props and moving images for film and television, testimonials, birth and death certificates, maps, and other written works (Geddes & Dion, 2004; Propfe, 2005). 
The principal tools for a calligrapher are the pen and the brush. Calligraphy pens (Figure 4.11) write with nibs that may be flat, round, or pointed (Child, 1985; Lamb, 1976; Reaves & Schulte, 2006). For some decorative purposes, multi-nibbed pens-steel brushes-can be used. However, works have also been created with felt-tip and ballpoint pens, although these works do not employ angled lines. There are some styles of calligraphy, such as Gothic script, that require a stub nib pen. 

Writing ink is usually water-based and is much less viscous than the oil-based inks used in printing. High quality paper, which has good consistency of absorption, enables cleaner lines (Aesthetic Theory, n.d.) although parchment or vellum is often used, as a knife can be used to erase imperfections and a light-box is not needed to allow lines to pass through it. Normally, light boxes and templates are used to achieve straight lines without pencil markings detracting from the work. Ruled paper, either for a light box or direct use, is most often ruled every quarter or half inch, although inch spaces are occasionally used. 
Calligraphic writing with brushes is most found in East Asian calligraphy (Figure 4.12; Figure 4.13). Traditional East Asian writing uses the Four Treasures of the Study (.... /.... ): the ink brushes known as m‡ob. (..) to write Chinese characters, Chinese ink, rice paper, and inkstone, known as the 
Four Friends of the Study (Korean: ...., translit..... ) in Korea. In addition to these four tools, desk pads and paperweights are also used. 
The shape, size, stretch, and hair type of the ink brush, the color, color density and water density of the ink, as well as the paper's water absorption speed and surface texture are the main physical parameters influencing the final result. The calligrapher's technique also influences the result. The calligrapher's work is influenced by the quantity of ink and water he lets the brush take, then by the pressure, inclination, and direction he gives to the brush, producing thinner or bolder strokes, and smooth or toothed borders. Eventually, the speed, accelerations, decelerations of the writer's moves, turns, and crochets, and the stroke order give the "spirit" to the characters, by greatly influencing their final shapes. 
Figure 4.12. On Calligraphy by Mi Fu (Song Dynasty) 

Figure 4.13. Japanese Calligraphy of the Word "Peace" and the Signature of the Meiji Period Calligrapher .ura Kanetake (1910) 

Photography 
Photography is the process of making pictures by means of the action of light. Light patterns reflected or emitted from objects are recorded onto a sensitive medium or storage chip through a timed exposure. The process is done through mechanical shutters or electronically timed exposure of photons into chemical processing or digitizing devices known as cameras. 
The word comes from the Greek words ... phos ("light"), and ...... graphis ("stylus", "paintbrush") or ..... graph, together meaning "drawing with light" or "representation by means of lines" or "drawing." Traditionally, the product of photography has been called a photograph. The term photo is an abbreviation; many people also call them pictures. In digital photography, the term image has begun to replace photograph. (The term image is traditional in geometric optics.) 
Filmmaking 
Filmmaking is the process of making a motion-picture, from an initial conception and research, through scriptwriting, shooting and recording, animation or other special effects, editing, sound and music work and finally distribution to an audience; it refers broadly to the creation of all types of films, embracing documentary, strains of theatre and literature in film, and poetic or experimental practices, and is often used to refer to video-based processes as well. 
Computer Art 
Visual artists are no longer limited to traditional art media. Computers have been used as an ever more common tool in the visual arts since the 1960s. Uses include the capturing or creating of images and forms, the editing of those images and forms (including exploring multiple compositions) and the final rendering or printing (including 3D printing). 
Computer art is any in which computers played a role in production or display. Such art can be an image, sound, animation, video, CD-ROM, DVD, video game, website, algorithm, performance or gallery installation. Many traditional disciplines are now integrating digital technologies and, as a result, the lines between traditional works of art and new media works created using computers have been blurred. For instance, an artist may combine traditional painting with algorithmic art and other digital techniques. As a result, defining computer art by its end product can be difficult. Nevertheless, this type of art is beginning to appear in art museum exhibits, though it has yet to prove its legitimacy as a form unto itself and this technology is widely seen in contemporary art more as a tool rather than a form as with painting. 
Computer usage has blurred the distinctions between illustrators, photographers, photo editors, 3-D modelers, and handicraft artists. Sophisticated rendering and editing software has led to multi-skilled image developers. Photographers may become digital artists. Illustrators may become animators. Handicraft may be computer-aided or use computer-generated imagery as a template. Computer clip art usage has also made the clear distinction between visual arts and page layout less obvious due to the easy access and editing of clip art in the process of paginating a document, especially to the unskilled observer. 
Sculpture 
Sculpture is three-dimensional artwork created by shaping or combining hard or plastic material, sound, or text and or light, commonly stone (either rock or marble), clay, metal, glass, or wood. Some sculptures are created directly by finding or carving; others are assembled, built together and fired, welded, molded, or cast. Sculptures are often painted. A person who creates sculptures is called a sculptor. 
Because sculpture involves the use of materials that can be molded or modulated, it is considered one of the plastic arts. The majority of public art is sculpture. Many sculptures together in a garden setting may be referred to as a sculpture garden. 
Sculptors do not always make sculptures by hand. With increasing technology in the 20th century and the popularity of conceptual art over technical mastery, more sculptors turned to art fabricators to produce their artworks. With fabrication, the artist creates a design and pays a fabricator to produce it. This allows sculptors to create larger and more complex sculptures out of material like cement, metal and plastic, that they would not be able to create by hand. Sculptures can also be made with 3-D printing technology. 
Paper Cutting 
Papercutting or paper cutting is the art of paper designs. The art has evolved uniquely all over the world to adapt to different cultural styles. One traditional distinction most styles share in common is that the designs are cut from a single sheet of paper (Figure 4.14; Figure 4.15; Figure 4.16) as opposed to multiple adjoining sheets as in collage. 
Figure 4.14. A Silhouette of Goethe (1778) 

Paper cutting, Jianzhi (..), is a traditional style of papercutting in China and it originated from cutting patterns for rich Chinese embroideries and later developed into a folk art in itself. Jianzhi has been practiced in China since at least the 6th Century AD Jianzhi has a number of distinct uses in Chinese culture, almost all of which are for health, prosperity or decorative purposes. Red is the most commonly used color. Jianzhi cuttings often have a heavy emphasis on Chinese characters symbolizing the Chinese zodiac animals. 

Figure 4.15. The paper cutting is in a style that is practically identical to the original 6th-century form. 
Although paper cutting is popular around the globe, only the Chinese paper cut was listed in the UNESCO Intangible Cultural Heritage Lists, which was in 2009 (Chinese Paper Cut, n.d.). The Chinese paper-cutting was recognized and listed because it has a history of more than 1500 years and it represents cultural values of the people throughout China. 
Modern paper cutting has developed into a commercial industry. Papercutting remains popular in contemporary China, especially during special events like the Chinese New Year or weddings (McCormick & White, 2011, p. 285). 
Figure 4.16. Chinese Paper Cuttings (2014) 

Origami 
Origami (... ) from ori meaning "folding", and kami meaning "paper" (kami changes to gami due to rendaku)) is the art of paper folding, which is often associated with Japanese culture. In modern usage, the word "origami" is used as an inclusive term for all folding practices, regardless of their culture of origin. The goal is to transform a flat square sheet of paper into a finished sculpture through folding and sculpting techniques. Modern origami practitioners generally discourage the use of cuts, glue, or markings on the paper. 

Origami Paper 
Almost any laminar (flat) material can be used for folding; the only requirement is that it should hold a crease. The small number of basic origami folds can be combined in a variety of ways to make intricate designs. The best-known origami model is the Japanese paper crane (Figure 4.17). In general, these designs begin with a square sheet of paper (Figure 4.18) whose sides may be of different colors, prints, or patterns. Traditional Japanese origami, which has been practiced since the Edo period (1603-1867), has often been less strict about these conventions, sometimes cutting the paper or using non-square shapes to start with. The principles of origami are also used in stents, packaging and other engineering applications (Merali, 2011). 

Figure 4.18. A crane and papers of the same size used to fold it. 
Ideas of Integrating Visual Arts in the Classroom 
Integrating visual arts into the classroom is not as daunting as one may think. Visual arts lend itself to naturalistic, wholistic, and authentic learning. Visual arts integration does not mean integrating art for the sake of another subject; but integrating art for artsÕ sake to heighten studentsÕ overall learning experience (Harris, 2011). 
To start, think about the fundamentals of visual arts such as line, shape, and color. To teach the vocabulary words of color, the following terminology is suggested: saturation (the amount of intensity a color displays, either very bright or dim), hues (color used in any design in any pixel), tone/value (the amount of lightness in a color placed along a spectrum of black (no tone) to white (highest tone), shades (shades are created by taking a hue and adding pure black to create a new deeper color), and tints (similar except you add pure white to create a new color) (The Science Behind Design Color Theory, n.d.). 
To successfully integrate visual arts into the classroom, it is important for the teachers to go outside of own box to new ideas and new learning; it is important to have Òcross-disciplinary thinking, collaborative and intentional works, written reflections, revisions, documentation, exhibitions, and critiques-all of which being crucial towards holistic and authentic learning and instructionÓ (Harris, 2011, p. 21). Visual arts can be integrated into any subject; however, it requires the teacherÕs efforts for planning, researching, and reflecting (Harris, 2011). 
When visual arts are added to the learning process, content learning becomes more tangible, personal, and meaningful. Visual arts allow students to engage in hands-on learning and inquiry-based learning. Visual arts add to studentsÕpersonal expression and creativityin the learning process. In other words, students are engaged in the learning process for deeper levels of learning when visual arts are integrated. There are many activities that can help teachers a jumpstart in integrating visual arts in the classroom. Below are a few activity ideas of integrating visual arts in content areas: 
Activity1: Da VinciÕsNotebook: theteachershowstheimages to studentsandthen students search images 
to brainstorm images for thoughts and themes for the Notebook. The teacher should make sure the images are age-appropriate before letting students surf the web. This activity can be integrated in any subject area (Koonlaba, 2015). 
Activity 2: Paper Sculpture Project. Students create paper sculpture projects. This could be integrated in history, writing, language arts, science, and math (Koonlaba, 2015). 
Activity 3: Pop Art. It is always very popular with students. The simple imagery is easy for them to imitate. 
ItÕs also engaging in content areas (Koonlaba, 2015). 
Activity 4: Class Comic Book. Create a class comic book by combining student art pieces and having them work together to write a story with a beginning, a middle, and an ending (Koonlaba, 2015). 
Activity 5: Pyramid Art Project. A Pyramid could be painted/drawn/sketched. This could be used to connect art in math and social studies content area. 
Activity 6: Poster/Brochure/Advertisement Project. Ask students to create a poster, brochure, or advertisement. These art projects can be great alternative assessment products; they are also a great tool to teach students about graphic design (Hayes, n.d.). 
Activity 7: A Work of Art. Ask students to draw or make a collage about a specific topic they are studying in any content area. Cartoons are great to incorporate visual art with current events in social studies (Hayes, n.d.). 
REFERENCES 
Aesthetic theory of Arabic calligraphy in the Islamic Art. (n.d.). Retrieved from https://www.calligraphyfonts.info/aesthetic-theory-arabic-calligraphy-islamic-art/ 
Child, H. (Ed.). (1985). The calligrapher's handbook. Marlboro, NJ: Taplinger Publishing Co. 
Chinese paper cut. (n.d.). Retrieved from https://ich.unesco.org/en/RL/chinese-paper-cut-00219 
Drawing. (n.d.). Retrieved from https://web.archive.org/web/20090314224108/http://www.history.com/encyclopedia.do?vendorId=FWNE .fw..dr085000.a 
Geddes, A., & Dion, C. (2004). Miracle: A celebration of new life. Kansas City, MO: Andrews McMeel 
Publishing. Harris, S. F. (2011). Integrating visual arts into the curriculum. Retrieved from https://tspace.library.utoronto.ca/bitstream/1807/35098/1/Susannah%20Harris.MTRP%20FINAL.pdf 
Haynes, K. (n.d.). 12 ways to bring the arts into your classroom. Retrieved from http://www.teachhub.com/12-ways-bring-arts-your-classroom 
Hills, H. (2011). Rethinking the baroque. Farnham, UK: Ashgate Publishing. History of drawing. (n.d.). Retrieved from http://www.dibujosparapintar.com/english/drawing_course_history.html 
History of painting. (n.d.). Retrieved from http://www.historyworld.net/wrldhis/PlainTextHistories.asp?groupid=1320&HistoryID=ab20&gtrack=pt hc 
Impressionism in visual arts. (n.d.). Retrieved from http://www.impressionism.org/ Impressionism. (n.d.). Retrieved from http://www.ibiblio.org/wm/paint/glo/impressionism/ Koonlaba, A. E. (2015, February 24). 3 visual artists-and tricks-for integrating the arts into core subjects. 
Retrieved from https://www.edweek.org/tm/articles/2015/02/24/3-visual-artists-and-tricks-for-integrating.the-arts.html 
Lamb, C. M. (Ed.). (1976) [1956]. Calligrapher's handbook. London, UK: Faber & Faber. McCormick, C. T., & White, K. K. (2011). Folklore: An encyclopedia of beliefs, customs, tales, music, and art. Santa Barbara, CA: ABC-CLIO. 
Mediaville, C. (1996). Calligraphy: From calligraphy to abstract painting (translated by A. Marshall). 
Wommelgem, BE: Scirpus Publications. Merali, Z. (2011, June 17). Origami engineer flexes to create stronger, more agile materials. Science, 332(6036), 1376-1377. doi:10.1126/science.332.6036.1376 
Modern art movements (1870-1970). (n.d.). Retrieved from http://www.visual-arts-cork.com/modern-art.

movements.htm Painting in renaissance art. (n.d.). Retrieved from http://faculty.evansville.edu/rl29/art340/f04/renaissancepainting.html 
Post impressionism. (n.d.). Retrieved from https://www.metmuseum.org/toah/hd/poim/hd_poim.htm Propfe, J. (2005). SchreibKunstRaume: Kalligraphie im Raum Verlag (in German). Munich, DE: Callwey Verlag.  
Reaves, M., & Schulte, E. (2006). Brush lettering: An instructional manual in Western brush calligraphy (Revised ed.). New York, NY: Design Books. 
The different forms of art. (n.d.). Retrieved from https://arthearty.com/different-forms-of-art The history of engraving in China. (n.d.). Retrieved from http://www.chinavista.com/experience/engrave/engrave.html 
The printed image in the West: History and technique. (n.d.). Retrieved from 
https://www.metmuseum.org/toah/hd/prnt/hd_prnt.htm The science behind design color theory. (n.d.) Retrieved from https://designshack.net/articles/graphics/the-science-behind-design-color-theory/ 
UVA. (n.d.). What is visual art? Retrieved from http://www.unboundvisualarts.org/what-is-visual-art/ 
SUGGESTED ACTIVITIES 
VISUAL ART 
Art lessons in the classroom. (2014). Retrieved from http://artsedwashington.org/for-educators/art.lessons-in-the-classroom 
Artsedge lessons for elementary school. (2014). Retrieved from http://artsedge.kennedy.center.org/educators/lessons/grade-band-collections/k-5 
Art lessons by medium or technique. (2014). Retrieved from http://www.kinderart.com/across/ 
Art lessons and activities. (2017). Retrieved from http://www.nga.gov/content/ngaweb/education/teachers/lessons-activities.html 
Teacher art resources. (2015). Retrieved from http://www.nga.gov/content/ngaweb/education/teachers.html 
Ways to integrate art and math in an elementary classroom. (2013). Retrieved from http://educationcloset.com/2012/05/15/ways-to-integrate-art-and-math-in-an-elementary-classroom/ 

THREE-D ART 
3D classroom art. (2015). Retrieved from https://www.pinterest.com/jenichav/3d-classroom-art/ Art lesson plans and activities. (2014). Retrieved from http://lesson-plans.theteacherscorner.net/art/ Ward, Y. (2012). 3D cubist foil art in the classroom. Retrieved from 
http://misswardsfirstclass.blogspot.com/2015/02/3d-cubist-foil-art.html Welfare, J. (2013). 3D sculpture art class. Retrieved from http://wellfareartclassroom.weebly.com/3d.sculpture.html 



TECHNOLOGY 
Gregory, D. C. (2009). Boxes with fires: Wisely integrating learning technologies into the art classroom.  Art Education, 62(3), 47-54. Retrieved from http://search.proquest.com/docview/199369897?accountid=10661 
Gooch, K., & Paula, S. (2011). Integration of the visual arts and web 2.0 technologies in the classroom. New England Reading Association Journal, 47(1), 92-101. 
DeSilva, D. (2015, March 24). The software used by Pixar to create visual effects for movies like Toy Story, Up, and WALL-E is now free [Blog Post]. Retrieved from http://9to5toys.com/2015/03/24/pixar.renderman-free-download/#more-139484 
ADDITIONAL SOURCES 
WEBSITES 
Chesser, L. (2013). 50 ways to integrate are into any lesson. Retrieved from http://www.opencolleges.edu.au/informed/features/50-ways-to-integrate-art-into-any-lesson/ 
Keddie, J. (2010). Using art in the classroom. Retrieved from http://www.onestopenglish.com/skills/integrated-skills/using-art-in-the-classroom/pdf-content/using-art.in-the-classroom-introduction/550073.article 
Long, B. (2014). Arts integration: Models and methods in elementary art education. Retrieved from http://scholarworks.gsu.edu/cgi/viewcontent.cgi?article=1149&context=art_design_theses 
Lynch, G. (2011). The importance of art in child development. Retrieved from http://www.pbs.org/parents/education/music-arts/the-importance-of-art-in-child-development/ 
Riley, S. (2012). Ways to integrate art and math in an elementary classroom. Retrieved from http://educationcloset.com/2012/05/15/ways-to-integrate-art-and-math-in-an-elementary-classroom/ 
Sorensen, M. (2010). Integrating are and literacy in the elementary classroom. Retrieved from http://digital.lib.uni.edu/cdm/ref/collection/hnrp/id/25 

BOOKS AVAILABLE AT DALTON STATE COLLEGE LIBRARY 
Chapman, L. H. (1978). Approaches to art in education. New York, NY: Harcourt Brace Jovanovich. Dondiego, B., Ekberg, M. H., & Mohrman, G. (1998). Start with art. Torrance, CA: Totline Publications. Klaustermeier, D., & netLibrary, I. (1997). Art projects by design: A guide for the classroom [eBook]. 
Englewood, CO: Teacher Ideas Press. Pappas, C., Kiefer, B. Z., & Levstik, L. S. (2006). An integrated language perspective in the elementary school: An action approach (4th ed.). Boston, MA: Pearson Allyn & Bacon. 

SCHOLARLY JOURNAL ARTICLES 
Bell, A. (2007). Language arts/science/math: Animal and number poetry. School Library Media Activities 
Monthly, 23(8), 11-12. Bloom, A., & Hanny, J. (2006). Integrating art from around the world into the classroom. Phi Delta Kappan, 87(8), 1. 
Gregory, D. C. (2009). Boxes with fires: Wisely integrating learning technologies into the art classroom. Art Education, 62(3), 47-54. 
Hale, C. (2005). Art in the classroom. Instructor, 114(5), 21-22, 24, 26. Hasio, C., & Crane, T. J. (2014). Teaching art a greener path: Integrating sustainability concepts of interior design curriculum into the art education curriculum. Art Education, 67(6), 35-39. 
McCollister, S. (2002). Developing criteria rubrics in the art classroom. Art Education, 55(4), 46-52. 
Naested, I. R., & McVean, G. (1998). Art in the classroom: An integrated approach to teaching art in Canadian elementary & middle schools. A Fine FACTA, 1(1), 36-37. Rufo, D. (2011). Allowing artistic agency in the elementary classroom. Art Education, 64(3), 18-23. Tavin, K. M., & Anderson, D. (2003). Teaching (popular) visual culture: Deconstructing Disney in the 
elementary art classroom. Art Education, 56(3), 21-24, 33-35 VIDEOS 
Elements of art: Texture [Video file]. (2014). Retrieved from https://youtu.be/YoOb3JSDAUo 
Inspiration Fridays-21st century technology, art and learning in the classroom [Video file]. (2014). Retrieved from https://www.youtube.com/watch?v=MPCKXra39SA Integrating art into lessons [Video file]. (2016). Retrieved from https://www.youtube.com/watch?v=Xkj.
zkMcJOU 
Integrating art with STEM education [Video file]. (2015). Retrieved from https://youtu.be/DjpWQkmopgY Visual arts for the classroom teacher-young audiences of Oregon & SW Washington [Video file]. (2013). 
Retrieved from https://www.youtube.com/watch?v=56Idmu9oBXA Visual art teaching [Video file]. (2014). Retrieved from https://youtu.be/dqSa2X6O6U8 

CHAPTER FIVE LITERARY ARTS POETRY 


SELECTED READING 
Poetry is a form of literature that uses aesthetic and rhythmic qualities of language-such as phonaesthetics, sound symbolism, and meter-to evoke meanings in addition to, or in place of, the prosaic ostensible meaning (Poetry, 2013a; Poetry, 2013b; Poetry, n.d.). 
Poetry has a long history, dating back to the Sumerian Epic of Gilgamesh. Early poems evolved from folk songs such as the Chinese Shijing, or from a need to retell oral epics, as with the Sanskrit Vedas, Zoroastrian Gathas, and the Homeric epics, the Iliad and the Odyssey. Ancient attempts to define poetry, such as Aristotle's Poetics, focused on the uses of speech in rhetoric, drama, song and comedy. Later attempts concentrated on features such as repetition, verse form and rhyme, and emphasized the aesthetics which distinguish poetry from more objectively informative, prosaic forms of writing. 
Poetry uses forms and conventions to suggest differential interpretation to words, or to evoke emotive responses. Devices such as assonance, alliteration, onomatopoeia and rhythm are sometimes used to achieve musical or incantatory effects. The use of ambiguity, symbolism, irony and other stylistic elements of poetic diction often leaves a poem open to multiple interpretations. Similarly figures of speech such as metaphor, simile and metonymy create a resonance between otherwise disparate images-a layering of meanings, forming connections previously not perceived (Strachan & Terry, 2000). Kindred forms of resonance may exist, between individual verses, in their patterns of rhyme or rhythm. 
Some poetry types are specific to particular cultures and genres and respond to characteristics of the language in which the poet writes. Readers accustomed to identifying poetry with Dante, Goethe, Mickiewicz and Rumi may think of it as written in lines based on rhyme and regular meter; there are, however, traditions, such as Biblical poetry, that use other means to create rhythm and euphony. Much modern poetry reflects a critique of poetic tradition, playing with and testing, among other things, the principle of euphony itself, sometimes altogether forgoing rhyme or set rhythm (Eliot, 1999; Longenbach, 1997; Schmidt, 1999). In today's increasingly globalized world, poets often adapt forms, styles and techniques from diverse cultures and languages. 
History 
Some scholars believe that the art of poetry may predate literacy (Hoivik & Luger, 2009). Others, however, suggest that poetry did not necessarily predate writing (Goody, 1987). 
The oldest surviving epic poem, the Epic of Gilgamesh, comes from the 3rd millennium BCE in Sumer (in Mesopotamia, now Iraq), and was written in cuneiform script on clay tablets and, later, on papyrus (Sanders, 1972). A tablet dating to c. 2000 BCE describes an annual rite in which the king symbolically married and mated with the goddess Inanna to ensure fertility and prosperity; it is considered the world's oldest love poem (Arsu, 2006; Mark, 2014). An example of Egyptian epic poetry is The Story of Sinuhe (c. 1800 BCE). 
Other ancient epic poetry includes the Greek epics, the Iliad and the Odyssey; the Avestan books, the Gathic Avesta and the Yasna; the Roman national epic, Virgil's Aeneid; and the Indian epics, the Ramayana and the Mahabharata. Epic poetry, including the Odyssey, the Gathas, and the Indian Vedas, appears to have been composed in poetic form as an aid to memorization and oral transmission, in prehistoric and ancient societies (Ahl & Roisman, 1996; Goody, 1987). 
Other forms of poetry developed directly from folk songs. The earliest entries in the oldest extant collection of Chinese poetry, the Shijing, were initially lyrics (Ebrey, 1993). 
The efforts of ancient thinkers to determine what makes poetry distinctive as a form, and what distinguishes good poetry from bad, resulted in "poetics"-the study of the aesthetics of poetry (Abondolo, 2001). Some ancient societies, such as China's through her Shijing (Classic of Poetry), developed canons of poetic works that had ritual as well as aesthetic importance (Gentz, 2008). More recently, thinkers have struggled to find a definition that could encompass formal differences as great as those between Chaucer's Canterbury Tales and Matsuo Bash.'s Oku no Hosomichi, as well as differences in context spanning Tanakh religious poetry, love poetry, and rap (Habib, 2005). 
Western Traditions 
Classical thinkers employed classification as a way to define and assess the quality of poetry. Notably, the existing fragments of Aristotle's Poetics describe three genres of poetry-the epic, the comic, and the tragic-and develop rules to distinguish the highest-quality poetry in each genre, based on the underlying purposes of the genre (Heath, 1997). Later aestheticians identified three major genres: epic poetry, lyric poetry, and dramatic poetry, treating comedy and tragedy as subgenres of dramatic poetry (Frow, 2007). 
Aristotle's work was influential throughout the Middle East during the Islamic Golden Age (Bogges, 1968; Burnett, 2001), as well as in Europe during the Renaissance (Grendler, 2004). Later poets and aestheticians often distinguished poetry from, and defined it in opposition to prose, which was generally understood as writing with a proclivity to logical explication and a linear narrative structure (Kant & Bernard, 1914). 
This does not imply that poetry is illogical or lacks narration, but rather that poetry is an attempt to render the beautiful or sublime without the burden of engaging the logical or narrative thought process. English Romantic poet John Keats termed this escape from logic "Negative Capability" (Ou, 2009, pp. 1-3). This "romantic" approach views form as a key element of successful poetry because form is abstract and distinct from the underlying notional logic. This approach remained influential into the 20th century (Watten, 2003). 
During this period, there was also substantially more interaction among the various poetic traditions, in part due to the spread of European colonialism and the attendant rise in global trade (Abu-Mahfouz, 2008). In addition to a boom in translation, during the Romantic period numerous ancient works were rediscovered (Highet, 1985). 
Genres 
Poetry is often thought of in terms of different genres and subgenres. A poetic genre is generally a tradition or classification of poetry based on the subject matter, style, or other broader literary characteristics (Chandler, 1997). Some commentators view genres as natural forms of literature. Others view the study of genres as the study of how different works relate and refer to other works. 
Narrative Poetry 
Narrative poetry is a genre of poetry that tells a story. Broadly it subsumes epic poetry, but the term "narrative poetry" is often reserved for smaller works, generally with more appeal to human interest. Narrative poetry may be the oldest type of poetry. Many scholars of Homer have concluded that his Iliad and Odyssey were composed from compilations of shorter narrative poems that related individual episodes. Much narrative poetry-such as Scottish and English ballads, and Baltic and Slavic heroic poems-is performance poetry with roots in a preliterate oral tradition. It has been speculated that some features that distinguish poetry from prose, such as meter, alliteration and kennings, once served as memory aids for bards who recited traditional tales (Kirk, 2010). Notable narrative poets have included Ovid, Dante, Juan Ruiz, William Langland, Chaucer, Fernando de Rojas, Lu’s de Cams, Shakespeare, Alexander Pope, Robert Burns, Adam Mickiewicz, Alexander Pushkin, Edgar Allan Poe, Alfred Tennyson, and Anne Carson. 
Lyric Poetry 
Lyric poetry is a genre that, unlike epic and dramatic poetry, does not attempt to tell a story but instead is of a more personal nature. Poems in this genre tend to be shorter, melodic, and contemplative. Rather than depicting characters and actions, it portrays the poet's own feelings, states of mind, and perceptions (Blasing, 2006). Notable poets in this genre include Christine de Pizan, John Donne, Gerard Manley Hopkins, Antonio Machado, and Edna St. Vincent Millay. 
Epic Poetry 
Epic poetry is a genre of poetry, and a major form of narrative literature. This genre is often defined as lengthy poems concerning events of a heroic or important nature to the culture of the time. It recounts, in a continuous narrative, the life and works of a heroic or mythological person or group of persons (Hainsworth, 1989). Examples of epic poems are Homer's Iliad and Odyssey, Virgil's Aeneid, the Nibelungenlied, Lu’s de Cams' Os Lus’adas, the Cantar de Mio Cid, the Epic of Gilgamesh, the Mahabharata, Valmiki's Ramayana, Ferdowsi's Shahnama, Nizami (or Nezami)'s Khamse (Five Books), and the Epic of King Gesar. While the composition of epic poetry, and of long poems generally, became less common in the west after the early 20th century, some notable epics have continued to be written. Derek Walcott won a Nobel prize to a great extent on the basis of his epic, Omeros (Swedish Academy, n.d.). 
Satirical Poetry 
Poetry can be a powerful vehicle for satire. The Romans had a strong tradition of satirical poetry, often written for political purposes. A notable example is the Roman poet Juvenal's satires (Dominik & Wehrle, 1999). The same is true of the English satirical tradition. John Dryden (a Tory), the first Poet Laureate, produced in 1682 Mac Flecknoe, subtitled "A Satire on the True Blue Protestant Poet, T.S." (a reference to Thomas Shadwell) (Black, 2011, p. 1056). Another master of 17th-century English satirical poetry was John Wilmot, 2nd Earl of Rochester (Treglown, 1973). Satirical poets outside England include Poland's Ignacy Krasicki, Azerbaijan's Sabir and Portugal's Manuel Maria Barbosa du Bocage. 
Elegy 
An elegy is a mournful, melancholy or plaintive poem, especially a lament for the dead or a funeral song. The term "elegy," which originally denoted a type of poetic meter (elegiac meter), commonly describes a poem of mourning. An elegy may also reflect something that seems to the author to be strange or mysterious. The elegy, as a reflection on a death, on a sorrow more generally, or on something mysterious, may be classified as a form of lyric poetry (Kennedy, 2007; Pigman, 1985). 
Notable practitioners of elegiac poetry have included Propertius, Jorge Manrique, Jan Kochanowski, Chidiock Tichborne, Edmund Spenser, Ben Jonson, John Milton, Thomas Gray, Charlotte Turner Smith, William Cullen Bryant, Percy Bysshe Shelley, Johann Wolfgang von Goethe, Evgeny Baratynsky, Alfred Tennyson, Walt Whitman, Louis Gallet, Antonio Machado, Juan Ram JimŽnez, Giannina Braschi, William Butler Yeats, Rainer Maria Rilke, and Virginia Woolf. 
Verse Fable 
The fable is an ancient literary genre, often (though not invariably) set in verse. It is a succinct story that features anthropomorphized animals, plants, inanimate objects, or forces of nature that illustrate a moral 
lesson (a "moral"). Verse fables have used a variety of meter and rhyme patterns (Abrams & Harpham, 2014). Notable verse fabulists have included Aesop, Vishnu Sarma, Phaedrus, Marie de France, Robert Henryson, Biernat of Lublin, Jean de La Fontaine, Ignacy Krasicki, FŽlix Mar’a de Samaniego, Tom‡s de Iriarte, Ivan Krylov and Ambrose Bierce. 
Dramatic Poetry 
Dramatic poetry is drama written in verse to be spoken or sung, and appears in varying, sometimes related forms in many cultures. Greek tragedy in verse dates to the 6th century B.C. and may have been an influence on the development of Sanskrit drama) just as Indian drama in turn appears to have influenced the development of the bianwen verse dramas in China, forerunners of Chinese Opera (Dolby, 1983; Keith, 1992). East Asian verse dramas also include Japanese Noh. Examples of dramatic poetry in Persian literature include Nizami's two famous dramatic works, Layla and Majnun and Khosrow and Shirin, Ferdowsi's tragedies such as Rostam and Sohrab, Rumi's Masnavi, Gorgani's tragedy of Vis and Ramin, and Vahshi's tragedy of Farhad. 
Speculative Poetry 
Speculative poetry, also known as fantastic poetry (of which weird or macabre poetry is a major sub-classification), is a poetic genre which deals thematically with subjects which are "beyond reality", whether via extrapolation as in science fiction or via weird and horrific themes as in horror fiction. Such poetry appears regularly in modern science fiction and horror fiction magazines. Edgar Allan Poe is sometimes seen as the "father of speculative poetry" (Dutcher, 2005, pp. 11-17). Poe's most remarkable achievement in the genre was his anticipation, by three-quarters of a century, of the Big Bang theory of the universe's origin, in his then much-derided 1848 essay (which, due to its very speculative nature, he termed a "prose poem") Eureka: A Prose Poem (Robinson, 2015; Rombeck, 2005). 
Prose Poetry 
Prose poetry is a hybrid genre that shows attributes of both prose and poetry. It may be indistinguishable from the micro-story (a.k.a. the "short short story", "flash fiction"). While some examples of earlier prose strike modern readers as poetic, prose poetry is commonly regarded as having originated in 19th-century France, where its practitioners included Aloysius Bertrand, Charles Baudelaire, Arthur Rimbaud and StŽphane MallarmŽ (Monte, 2000). Since the late 1980s especially, prose poetry has gained increasing popularity, with entire journals, such as The Prose Poem: An International Journal, Contemporary Haibun Online, and Haibun Today devoted to that genre and its hybrids. Latin American poets of the 20th century who wrote prose poems include Octavio Paz and Giannina Braschi (Octavio Paz, n.d.; Braschi's Empire of Dreams, n.d.). 
Light Poetry 
Light poetry, or light verse, is poetry that attempts to be humorous. Poems considered "light" are usually brief, and can be on a frivolous or serious subject, and often feature word play, including puns, adventurous rhyme and heavy alliteration. Although a few free verse poets have excelled at light verse outside the formal verse tradition, light verse in English is usually formal. Common forms include the limerick, the clerihew, and the double dactyl. 
While light poetry is sometimes condemned as doggerel, or thought of as poetry composed casually, humor often makes a serious point in a subtle or subversive way. Many of the most renowned "serious" poets have also excelled at light verse. Notable writers of light poetry include Lewis Carroll, Ogden Nash, X. J. Kennedy, Willard R. Espy, and Wendy Cope. 
Elements of Poetry 
Prosody 
Prosody is the study of the meter, rhythm, and intonation of a poem. Rhythm and meter are different, although closely related (Pinsky, 1998). Meter is the definitive pattern established for a verse (such as iambic pentameter), while rhythm is the actual sound that results from a line of poetry. Prosody also may be used more specifically to refer to the scanning of poetic lines to show meter (Fussell, 1965). 
Rhythm 
The methods for creating poetic rhythm vary across languages and between poetic traditions. Languages are often described as having timing set primarily by accents, syllables, or moras, depending on how rhythm is established, though a language can be influenced by multiple approaches. Japanese is a mora-timed language. Syllable-timed languages include Latin, Catalan, French, Leonese, Galician and Spanish. English, Russian and, generally, German are stress-timed languages (Schter, 2005). Varying intonation also affects how rhythm is perceived. Languages can rely on either pitch, such as in Vedic Sanskrit or Ancient Greek, or tone. Tonal languages include Chinese, Vietnamese and most Subsaharan languages (Yip, 2002). 
Metrical rhythm generally involves precise arrangements of stresses or syllables into repeated patterns called feet within a line. In Modern English verse the pattern of stresses primarily differentiate feet, so rhythm based on meter in Modern English is most often founded on the pattern of stressed and unstressed syllables (alone or elided) (Fussell, 1965). In the classical languages, on the other hand, while the metrical units are similar, vowel length rather than stresses define the meter (Jorgens, 1982). Old English poetry used a metrical pattern involving varied numbers of syllables but a fixed number of strong stresses in each line (Fussell, 1965). 
The chief device of ancient Hebrew Biblical poetry, including many of the psalms, was parallelism, a rhetorical structure in which successive lines reflected each other in grammatical structure, sound structure, notional content, or all three. Parallelism lent itself to antiphonal or call-and-response performance, which could also be reinforced by intonation. Thus, Biblical poetry relies much less on metrical feet to create rhythm, but instead creates rhythm based on much larger sound units of lines, phrases and sentences (Walker-Jones, 2003). Some classical poetry forms, such as Venpa of the Tamil language, had rigid grammars (to the point that they could be expressed as a context-free grammar) which ensured a rhythm (Bala Sundara Raman, Ishwar, & Ravindranath, 2003). In Chinese poetry, tones as well as stresses create rhythm. Classical Chinese poetics identifies four tones: the level tone, rising tone, departing tone, and entering tone (Brogan, 1995). 
The formal patterns of meter used in Modern English verse to create rhythm no longer dominate contemporary English poetry. In the case of free verse, rhythm is often organized based on looser units of cadence rather than a regular meter. Robinson Jeffers, Marianne Moore, and William Carlos Williams are three notable poets who reject the idea that regular accentual meter is critical to English poetry (Hartman, 1980). Jeffers experimented with sprung rhythm as an alternative to accentual rhythm (Hollander, 1981). 
Meter 
In the Western poetic tradition, meters are customarily grouped according to a characteristic metrical foot and the number of feet per line (Corn, 1997). The number of metrical feet in a line are described using Greek terminology: tetrameter for four feet and hexameter for six feet, for example (Corn, 1997). Thus, "iambic pentameter" is a meter comprising five feet per line, in which the predominant kind of foot is the "iamb." This metric system originated in ancient Greek poetry and was used by poets such as Pindar and Sappho, and by the great tragedians of Athens. Similarly, "dactylic hexameter", comprises six feet per line, of which the dominant kind of foot is the "dactyl". Dactylic hexameter was the traditional meter of Greek epic poetry, the earliest extant examples of which are the works of Homer and Hesiod (Annis, 2006). Iambic pentameter and dactylic hexameter were later used by a number of poets, including William Shakespeare and Henry Wadsworth Longfellow, respectively (Examples of English Metrical Systems, n.d.). The most common metrical feet in English are: 
. 
iamb-one unstressed syllable followed by a stressed syllable (e.g. des-cribe, in-clude, re-tract); 

. 
trochee-one stressed syllable followed by an unstressed syllable (e.g. pic-ture, flow-er); 

. 
dactyl-one stressed syllable followed by two unstressed syllables (e.g. an-no-tate, sim-i-lar); 

. 
anapest-two unstressed syllables followed by one stressed syllable (e.g. com-pre-hend); 

. 
spondee-two stressed syllables together (e.g. heart-beat, four-teen); 

. 
pyrrhic-two unstressed syllables together (rare, usually used to end dactylic hexameter). (Fussell, 1965, pp. 23-24) 


There are a wide range of names for other types of feet, right up to a choriamb, a four-syllable metric foot with a stressed syllable followed by two unstressed syllables and closing with a stressed syllable. The choriamb is derived from some ancient Greek and Latin poetry (Annis, 2006). Languages which utilize vowel length or intonation rather than or in addition to syllabic accents in determining meter, such as Ottoman Turkish or Vedic, often have concepts similar to the iamb and dactyl to describe common combinations of long and short sounds (Kiparsky, 1975). 
Each of these types of feet has a certain "feel," whether alone or in combination with other feet. The iamb, for example, is the most natural form of rhythm in the English language, and generally produces a subtle but stable verse (Thompson, 1961). Scanning meter can often show the basic or fundamental pattern underlying a verse, but does not show the varying degrees of stress, as well as the differing pitches and lengths of syllables (Pinsky, 1998). 
There is debate over how useful a multiplicity of different "feet" is in describing meter. For example, Robert Pinsky has argued that while dactyls are important in classical verse, English dactylic verse uses dactyls very irregularly and can be better described based on patterns of iambs and anapests, feet which he considers natural to the language (Pinsky, 1998). Actual rhythm is significantly more complex than the basic scanned meter described above, and many scholars have sought to develop systems that would scan such complexity. Vladimir Nabokov noted that overlaid on top of the regular pattern of stressed and unstressed syllables in a line of verse was a separate pattern of accents resulting from the natural pitch of the spoken words and suggested that the term "scud" be used to distinguish an unaccented stress from an accented stress (Nabokov, 1964, pp. 9-13). 
Metrical Patterns 
Different traditions and genres of poetry tend to use different meters, ranging from the Shakespearean iambic pentameter and the Homeric dactylic hexameter to the anapestic tetrameter used in many nursery rhymes. However, a number of variations to the established meter are common, both to provide emphasis or attention to a given foot or line and to avoid boring repetition. For example, the stress in a foot may be inverted, a caesura (or pause) may be added (sometimes in place of a foot or stress), or the final foot in a line may be given a feminine ending to soften it or be replaced by a spondee to emphasize it and create a hard stop. Some patterns (such as iambic pentameter) tend to be fairly regular, while other patterns, such as dactylic hexameter, tend to be highly irregular (Fussell, 1965). Regularity can vary between language. In addition, different patterns often develop distinctively in different languages, so that, for example, iambic tetrameter in Russian will generally reflect a regularity in the use of accents to reinforce the meter, which does not occur, or occurs to a much lesser extent, in English (Nabokov, 1964). Some common metrical patterns, with notable examples of poets and poems who use them, include: 
. 
Iambic pentameter (John Milton, Paradise Lost; William Shakespeare, Sonnets) (Adams, 1997, p. 206); 

. 
Dactylic hexameter (Homer, Iliad; Virgil, Aeneid) (Adams, 1997, p. 63); 

. 
Iambic tetrameter (Andrew Marvell, "To His Coy Mistress"; Alexander Pushkin, Eugene Onegin; Robert Frost, Stopping by Woods on a Snowy Evening) (What Is Tetrameter, n.d.); 

. 
Trochaic octameter (Edgar Allan Poe, "The Raven") (Adams, 1997, p. 60); 

. 
Trochaic tetrameter (Henry Wadsworth Longfellow) "The Song of Hiawatha"; the Finnish national epic "Kalevala" is also in trochaic tetrameter, the natural rhythm of Finnish and Estonian; 

. 
Alexandrine (Jean Racine, Phdre) (James & Jondorf, 1994, pp. 32-34). 


Rhyme, Alliteration, and Assonance 
Rhyme, alliteration, assonance and consonance are ways of creating repetitive patterns of sound. They may be used as an independent structural element in a poem, to reinforce rhythmic patterns, or as an ornamental element (Corn, 1997). They can also carry a meaning separate from the repetitive sound patterns created. For example, Chaucer used heavy alliteration to mock Old English verse and to paint a character as archaic (Osberg, 2001). 
Rhyme consists of identical ("hard-rhyme") or similar ("soft-rhyme") sounds placed at the ends of lines or at predictable locations within lines ("internal rhyme"). Languages vary in the richness of their rhyming structures; Italian, for example, has a rich rhyming structure permitting maintenance of a limited set of rhymes throughout a lengthy poem. The richness results from word endings that follow regular forms. English, with its irregular word endings adopted from other languages, is less rich in rhyme (Alighieri & Pinsky, 1994). The degree of richness of a language's rhyming structures plays a substantial role in determining what poetic forms are commonly used in that language (Kiparsky, 1973). 
Alliteration is the repetition of letters or letter-sounds at the beginning of two or more words immediately succeeding each other, or at short intervals; or the recurrence of the same letter in accented parts of words. Alliteration and assonance played a key role in structuring early Germanic, Norse and Old English forms of poetry. The alliterative patterns of early Germanic poetry interweave meter and alliteration as a key part of their structure, so that the metrical pattern determines when the listener expects instances of alliteration to occur. This can be compared to an ornamental use of alliteration in most Modern European poetry, where alliterative patterns are not formal or carried through full stanzas. Alliteration is particularly useful in languages with less rich rhyming structures. 
Assonance, where the use of similar vowel sounds within a word rather than similar sounds at the beginning or end of a word, was widely used in skaldic poetry, but goes back to the Homeric epic (Russom, 1998). Because verbs carry much of the pitch in the English language, assonance can loosely evoke the tonal elements of Chinese poetry and so is useful in translating Chinese poetry (Liu, 1990). Consonance occurs where a consonant sound is repeated throughout a sentence without putting the sound only at the front of a word. Consonance provokes a more subtle effect than alliteration and so is less useful as a structural element (Kiparsky, 1973). 
Rhyming Schemes 
In many languages, including modern European languages and Arabic, poets use rhyme in set patterns as a structural element for specific poetic forms, such as ballads, sonnets and rhyming couplets. However, the use of structural rhyme is not universal even within the European tradition. Much modern poetry avoids traditional rhyme schemes. Classical Greek and Latin poetry did not use rhyme (Wesling, 1980). Rhyme entered European poetry in the High Middle Ages, in part under the influence of the Arabic language in Al Andalus (modern Spain) (Menocal, 2003). Arabic language poets used rhyme extensively from the first development of literary Arabic in the sixth century, as in their long, rhyming qasidas (Sperl, 1996. Some rhyming schemes have become associated with a specific language, culture or period, while other rhyming schemes have achieved use across languages, cultures or time periods. Some forms of poetry carry a consistent and well-defined rhyming scheme, such as the chant royal or the rubaiyat, while other poetic forms have variable rhyme schemes (Adams, 1997). 
Most rhyme schemes are described using letters that correspond to sets of rhymes, so if the first, second and fourth lines of a quatrain rhyme with each other and the third line does not rhyme, the quatrain is said to have an "a-a-b-a" rhyme scheme. This rhyme scheme is the one used, for example, in the rubaiyat form (Fussell, 1965). Similarly, an "a-b-b-a" quatrain (what is known as "enclosed rhyme") is used in such forms as the Petrarchan sonnet (Adams, 1997). Some types of more complicated rhyming schemes have developed names of their own, separate from the "a-b-c" convention, such as the ottava rima and terza rima (Corn, 1997). 
Form in Poetry 
Poetic form is more flexible in modernist and post-modernist poetry and continues to be less structured than in previous literary eras. Many modern poets eschew recognizable structures or forms and write in free verse. But poetry remains distinguished from prose by its form; some regard for basic formal structures of poetry will be found in even the best free verse, however much such structures may appear to have been ignored (Whitworth, 2010). Similarly, in the best poetry written in classic styles there will be departures from strict form for emphasis or effect (Hollander, 1981). 
Among major structural elements used in poetry are the line, the stanza or verse paragraph, and larger combinations of stanzas or lines such as cantos. Also sometimes used are broader visual presentations of words and calligraphy. These basic units of poetic form are often combined into larger structures, called poetic forms or poetic modes (see following section), as in the sonnet or haiku. 
Lines and Stanzas 
Poetry is often separated into lines on a page. These lines may be based on the number of metrical feet or may emphasize a rhyming pattern at the ends of lines. Lines may serve other functions, particularly where the poem is not written in a formal metrical pattern. Lines can separate, compare or contrast thoughts expressed in different units, or can highlight a change in tone (Corn, 1997). 
Lines of poems are often organized into stanzas, which are denominated by the number of lines included. Thus a collection of two lines is a couplet (or distich), three lines a triplet (or tercet), four lines a quatrain, and so on. These lines may or may not relate to each other by rhyme or rhythm. For example, a couplet may be two lines with identical meters which rhyme or two lines held together by a common meter alone (Corn, 1997). 
Other poems may be organized into verse paragraphs, in which regular rhymes with established rhythms are not used, but the poetic tone is instead established by a collection of rhythms, alliterations, and rhymes established in paragraph form (Corn, 1997). Many medieval poems were written in verse paragraphs, even where regular rhymes and rhythms were used (Dalrymple, 2004). 
In many forms of poetry, stanzas are interlocking, so that the rhyming scheme or other structural elements of one stanza determine those of succeeding stanzas. Examples of such interlocking stanzas include, for 
example, the ghazal and the villanelle, where a refrain (or, in the case of the villanelle, refrains) is established in the first stanza which then repeats in subsequent stanzas. Related to the use of interlocking stanzas is their use to separate thematic parts of a poem. For example, the strophe, antistrophe and epode of the ode form are often separated into one or more stanzas (Corn, 1997). 
In some cases, particularly lengthier formal poetry such as some forms of epic poetry, stanzas themselves are constructed according to strict rules and then combined. In skaldic poetry, the drtkv¾tt stanza had eight lines, each having three "lifts" produced with alliteration or assonance. In addition to two or three alliterations, the odd numbered lines had partial rhyme of consonants with dissimilar vowels, not necessarily at the beginning of the word; the even lines contained internal rhyme in set syllables (not necessarily at the end of the word). Each half-line had exactly six syllables, and each line ended in a trochee. The arrangement of drtkv¾tts followed far less rigid rules than the construction of the individual drtkv¾tts (McTurk, 2004). 
Visual Presentation 
Even before the advent of printing, the visual appearance of poetry often added meaning or depth. Acrostic poems conveyed meanings in the initial letters of lines or in letters at other specific places in a poem (Freedman, 1972). In Arabic, Hebrew and Chinese poetry, the visual presentation of finely calligraphed poems has played an important part in the overall effect of many poems (Kampf, 2010). 
With the advent of printing, poets gained greater control over the mass-produced visual presentations of their work (Figure 5.1). Visual elements have become an important part of the poet's toolbox, and many poets have sought to use visual presentation for a wide range of purposes. Some Modernist poets have made the placement of individual lines or groups of lines on the page an integral part of the poem's composition. At times, this complements the poem's rhythm through visual caesuras of various lengths, or creates juxtapositions so as to accentuate meaning, ambiguity or irony, or simply to create an aesthetically pleasing form. In its most extreme form, this can lead to concrete poetry or asemic writing (Bohn, 1993; Sterling, 2009). 
Figure 5.1. Visual Poetry 

Diction 
Poetic diction treats the manner in which language is used and refers not only to the sound but also to the underlying meaning and its interaction with sound and form (Barfield, 1987). Many languages and poetic forms have very specific poetic dictions, to the point where distinct grammars and dialects are used specifically for poetry (Blank, 1996; Sheets, 1981). Registers in poetry can range from strict employment of ordinary speech patterns, as favored in much late-20th-century prosody through to highly ornate uses of language, as in medieval and Renaissance poetry (Paden, 2000; Perloff, 2002). 
Poetic diction can include rhetorical devices such as simile and metaphor, as well as tones of voice, such as irony. Aristotle wrote in the Poetics that "the greatest thing by far is to be a master of metaphor" (Aristotle, n.d. p. 22). Since the rise of Modernism, some poets have opted for a poetic diction that de.emphasizes rhetorical devices, attempting instead the direct presentation of things and experiences and the exploration of tone (Davis & Jenkins, 2007). On the other hand, Surrealists have pushed rhetorical devices to their limits, making frequent use of catachresis (San Juan, 2004). 
Allegorical stories are central to the poetic diction of many cultures, and were prominent in the West during classical times, the late Middle Ages and the Renaissance. Aesop's Fables, repeatedly rendered in both verse and prose since first being recorded about 500 B.C., are perhaps the richest single source of allegorical poetry through the ages (Treip, 1994). Other notable examples include the Roman de la Rose, a 13th-century French poem, William Langland's Piers Ploughman in the 14th century, and Jean de la Fontaine's Fables (influenced by Aesop's) in the 17th century. Rather than being fully allegorical, however, a poem may contain symbols or allusions that deepen the meaning or effect of its words without constructing a full allegory (Crisp, 2005). 
Another element of poetic diction can be the use of vivid imagery for effect. The juxtaposition of unexpected or impossible images is, for example, a particularly strong element in surrealist poetry and haiku (Gilbert, 2004). Vivid images are often endowed with symbolism or metaphor. Many poetic dictions use repetitive phrases for effect, either a short phrase (such as Homer's "rosy-fingered dawn" or "the wine-dark sea") or a longer refrain. Such repetition can add a sombre tone to a poem or can be laced with irony as the context of the words changes (Hollander, 1981). 
Poetic Forms 
Sonnet 
Among the most common forms of poetry, popular from the Late Middle Ages on, is the sonnet, which by the 13th century had become standardized as fourteen lines following a set rhyme scheme and logical structure. By the 14th century and the Italian Renaissance, the form had further crystallized under the pen of Petrarch, whose sonnets were translated in the 16th century by Sir Thomas Wyatt, who is credited with introducing the sonnet form into English literature (Corn, 1997). A traditional Italian or Petrarchan sonnet follows the rhyme scheme abba, abba, cdecde, though some variation, especially within the final six lines (or sestet), is common (Minta, 1980). The English (or Shakespearean) sonnet follows the rhyme scheme abab, cdcd, efef, gg, introducing a third quatrain (grouping of four lines), a final couplet, and a greater amount of variety with regard to rhyme than is usually found in its Italian predecessors. By convention, sonnets in English typically use iambic pentameter, while in the Romance languages, the hendecasyllable and Alexandrine are the most widely used meters. 
Sonnets of all types often make use of a volta, or "turn," a point in the poem at which an idea is turned on its head, a question is answered (or introduced), or the subject matter is further complicated. This volta can often take the form of a "but" statement contradicting or complicating the content of the earlier lines. In the Petrarchan sonnet, the turn tends to fall around the division between the first two quatrains and the sestet, while English sonnets usually place it at or near the beginning of the closing couplet. 
Sonnets are particularly associated with high poetic diction, vivid imagery, and romantic love, largely due to the influence of Petrarch as well as of early English practitioners such as Edmund Spenser (who gave his name to the Spenserian sonnet), Michael Drayton, and Shakespeare, whose sonnets are among the most famous in English poetry, with twenty being included in the Oxford Book of English Verse (Quiller-Couch, 1900). However, the twists and turns associated with the volta allow for a logical flexibility applicable to many subjects (Fussell, 1965). Poets from the earliest centuries of the sonnet to the present have utilized the form to address topics related to politics (John Milton, Percy Bysshe Shelley, Claude McKay), theology (John Donne, Gerard Manley Hopkins), war (Wilfred Owen, e. e. cummings), and gender and sexuality (Carol Ann Duffy). Further, postmodern authors such as Ted Berrigan and John Berryman have challenged the traditional definitions of the sonnet form, rendering entire sequences of "sonnets" that often lack rhyme, a clear logical progression, or even a consistent count of fourteen lines. 
Shi 
Shi (simplified Chinese:.; traditional Chinese:.; pinyin: sh.; Wade-Giles: shih) Is the main type of Classical Chinese poetry (Watson, 1971). Within this form of poetry the most important variations are "folk song" styled verse (yuefu), "old style" verse (gushi), "modern style" verse (jintishi) (Figure 5.2). In all cases, rhyming is obligatory. The Yuefu is a folk ballad or a poem written in the folk ballad style, and the number of lines and the length of the lines could be irregular. For the other variations of shi poetry, generally either a four line (quatrain, or jueju) or else an eight line poem is normal; either way with the even numbered lines rhyming. The line length is scanned by according number of characters (according to the convention that one character equals one syllable), and are predominantly either five or seven characters long, with a caesura before the final three syllables. The lines are generally end-stopped, considered as a series of couplets, and exhibit verbal parallelism as a key poetic device (Watson, 1971). The "old style" verse (gushi) is less formally strict than the jintishi, or regulated verse, which, despite the name "new style" verse actually had its theoretical basis laid as far back as Shen Yue (441-513 CE), although not considered to have reached its full development until the time of Chen Zi'ang (661-702 CE) (Watson, 1971). A good example of a poet known for his gushi poems is Li Bai (701-762 CE). Among its other rules, the jintishi rules regulate the tonal variations within a poem, including the use of set patterns of the four tones of Middle Chinese. The basic form of jintishi (lushi) has eight lines in four couplets, with parallelism between the lines in the second and third couplets. The couplets with parallel lines contain contrasting content but an identical grammatical relationship between words. Jintishi often have a rich poetic diction, full of allusion, and can have a wide range of subject, including history and politics (Faurot, 1998; Wang, 2004). One of the masters of the form was Du Fu (712-770 CE), who wrote during the Tang Dynasty (8th century) (Schirokauer, 1989). 
Figure 5.2. The Shijing (Classic of Poetry) 

Villanelle 
The villanelle is a nineteen-line poem made up of five triplets with a closing quatrain; the poem is characterized by having two refrains, initially used in the first and third lines of the first stanza, and then alternately used at the close of each subsequent stanza until the final quatrain, which is concluded by the two refrains. The remaining lines of the poem have an a-b alternating rhyme (Kumin, 2002). The villanelle has been used regularly in the English language since the late 19th century by such poets as Dylan Thomas (1952), W. H. Auden (1945), and Elizabeth Bishop (1976).   
Limerick 
A limerick is a poem that consists of five lines and is often humorous. Rhythm is very important in limericks for the first, second and fifth lines must have seven to ten syllables. However, the third and fourth lines only need five to seven. All of the lines must rhyme and have the same rhythm. 
Tanka 
Tanka is a form of unrhymed Japanese poetry, with five sections totalling 31 onji (phonological units identical to morae), structured in a 5-7-5-7-7 pattern (Alim, Ibrahim, & Pennycook, 2008). There is generally a shift in tone and subject matter between the upper 5-7-5 phrase and the lower 7-7 phrase. Tanka were written as early as the Asuka period by such poets as Kakinomoto no Hitomaro (fl. late 7th century), at a time when Japan was emerging from a period where much of its poetry followed Chinese form (Brower & Miner, 1988). Tanka was originally the shorter form of Japanese formal poetry (which was generally referred to as "waka") and was used more heavily to explore personal rather than public themes. By the tenth century, tanka had become the dominant form of Japanese poetry, to the point where the originally general term waka ("Japanese poetry") came to be used exclusively for tanka. Tanka are still widely written today (McCllintock, Ness, & Kacian, 2003). 
Ode 
Odes were first developed by poets writing in ancient Greek, such as Pindar, and Latin, such as Horace. Forms of odes appear in many of the cultures that were influenced by the Greeks and Latins (Gray, 2000). The ode generally has three parts: a strophe, an antistrophe, and an epode. The antistrophes of the ode possess similar metrical structures and, depending on the tradition, similar rhyme structures. In contrast, the epode is written with a different scheme and structure. Odes have a formal poetic diction, and generally deal with a serious subject. The strophe and antistrophe look at the subject from different, often conflicting, perspectives, with the epode moving to a higher level to either view or resolve the underlying issues. Odes are often intended to be recited or sung by two choruses (or individuals), with the first reciting the strophe, the second the antistrophe, and both together the epode (Gayley & Young, 2005). Over time, differing forms for odes have developed with considerable variations in form and structure, but generally showing the original influence of the Pindaric or Horatian ode. One non-Western form which resembles the ode is the qasida in Persian poetry (Kuiper, 2011). 
Ghazal 
The ghazal (also ghazel, gazel, gazal, or gozol) is a form of poetry common in Arabic, Persian, Turkish, Azerbaijani, Urdu and Bengali poetry. In classic form, the ghazal has from five to fifteen rhyming couplets that share a refrain at the end of the second line. This refrain may be of one or several syllables and is preceded by a rhyme. Each line has an identical meter. The ghazal often reflects on a theme of unattainable love or divinity (Campo, 2009). 
As with other forms with a long history in many languages, many variations have been developed, including forms with a quasi-musical poetic diction in Urdu (Qureshi, 1990). Ghazals have a classical affinity with Sufism, and a number of major Sufi religious works are written in ghazal form. The relatively steady meter and the use of the refrain produce an incantatory effect, which complements Sufi mystical themes well (Sequeira, 1981). Among the masters of the form is Rumi, a 13th-century Persian poet (Schimmel, 1988). One of the most famous poet in this type of poetry is Hafez. Themes of his Ghazal is exposing hypocrisy. His life and poems have been the subject of much analysis, commentary and interpretation, influencing post-fourteenth century Persian writing more than any other author (Khan, 1936). West-tlicher Diwan of Johann Wolfgang von Goethe that is a collection of lyrical poems, has been inspired by the Persian poet Hafez (Akhundi, n.d.; Shamel, 2013). 
Haiku 
Haiku is a type of Japanese poetry. Previously called hokku, haiku was given its current name by the Japanese writer Masaoka Shiki at the end of the 19th century. 
The traditional hokku usually was written in six verses or more or less 5, 7, 5 syllables (on-ji). The Japanese word cow, meaning "sound", corresponds to a mora, a phonetic unit similar but not identical to the syllable of a language such as English. A haiku has a special season word (the kigo) to represent the season in which the poem is set, or a reference to the natural world (Table 5.1). 
Table 5.1. Haiku Structure in English 
Line  Syllable Count  Description  
Line 1  5 syllables  A Haiku poem has a special season word to represent the season in which the poem is set or a reference to the natural word.  
Line 2  7 syllables  
Line 3  5 syllables  

Haiku usually breaks in three parts, called kireji, normally placed at the end of the first five or second seven morae. In Japanese, there are actual kireji words. In English, kireji is often replaced with commas, hyphens, elipses, or breaks in the haiku. Japanese haiku are normally written in one line, while English language haiku are traditionally separated into three lines. 
In Japanese, nouns do not have different singular and plural forms, so "haiku" is used as both a singular and plural noun in English as well. Japanese hokku and haiku are traditionally printed in one vertical line. 
An Example of Haiku by Bash.:
............. 
(Hatsu shigure saru mo komino wo hoshige nari) 
The first cold shower (5 syllables) Even the monkey seems to want (7 syllables) A little coat of straw (5 syllables) (Coats and straw hats were normally used in Japan to protect from rain at the time) 
A Haiku Example: Lotus Blossom by a Fifth-Grade Student (Figure 5.3) Figure 5.3. Lotus Blossom 

Lotus Blossom 
Lotus blossoms bloom, Morning dew glimmers on them, How pretty they look 
A Haiku Example: Nature (Figure 5.4) Figure 5.4. Nature 

Nature 
NatureÕs here with us 
She is all we need and want 
SheÕllforever be 
Cinquain 
Cinquain /.s..ke.n/ is a class of poetic forms that employ a 5-line pattern. Earlier used to describe any five-line form, it now refers to one of several forms that are defined by specific rules and guidelines. The modern form, known as American Cinquain (Alakalay-Gut,1985; Garison, 2002), was inspired by Japanese haiku and tanka (Drury, 2006, p. 61; Toleos, n.d. a) akin in spirit to that of the Imagists (Stillman, 1972). In her 1915 collection titled Verse, published one year after her death, Adelaide Crapsey (1878-1914) included 28 cinquains (Toleos, n.d. b). Crapsey's American Cinquain form developed in two stages. The first, fundamental form is a stanza of five lines of accentual verse, in which the lines comprise, in order, 1, 2, 3, 4, and 1 stresses. Then Crapsey decided to make the criterion a stanza of five lines of accentual-syllabic verse, in which the lines comprise, in order, 1, 2, 3, 4, and 1 stresses and 2, 4, 6, 8, and 2 syllables. Iambic feet were meant to be the standard for the cinquain, which made the dual criteria match perfectly. Some resource materials define classic cinquains as solely iambic, but that is not necessarily so (Garison, 2002). In contrast to the Eastern forms upon which she based them, Crapsey always titled her cinquains, effectively utilizing the title as a sixth line. Crapsey's cinquain depends on strict structure and intense physical imagery to communicate a mood or feeling (Post, 2002). The Scottish poet William Soutar also wrote over one hundred American Cinquains (he labelled them Epigrams) between 1933 and 1940 (Strand, 2005). The form of American Cinquain is illustrated by Crapsey's poem "November Night": 
November Night 
Listen... With faint dry sound, Like steps of passing ghosts, The leaves, frost-crisp'd, break from the trees And fall. (Craspey, 1922, p. 31; as cited in Toleos, n.d.b) 
The Crapsey cinquain has subsequently seen a number of variations by modern poets. Detailed descriptions are summarized in Table 5.2: 
Table 5.2. Cinquain Variations 
Variation  Description  
Reverse Cinquain  a form with one 5-line stanza in a syllabic pattern of two, eight, six, four, two  
Mirror Cinquain  a form with two 5-line stanzas consisting of a cinquain followed by a reverse cinquain  
Butterfly Cinquain  a nine-line syllabic form with the pattern two, four, six, eight, two, eight, six, four, two  
Crown Cinquain  a sequence of five cinquain stanzas functioning to construct one larger poem  
Garland Cinquain  a series of six cinquains in which the last is formed of lines from the preceding five, typically line one from stanza one, line two from stanza two, and so on  

The didactic cinquain is closely related to the Crapsey cinquain. It is an informal cinquain widely taught in elementary schools and has been featured in, and popularized by, children's media resources, including Junie B. Jones and PBS Kids. This form is also embraced by young adults and older poets for its expressive simplicity. The prescriptions of this type of cinquain refer to word count, not syllables and stresses. Ordinarily, the first line is a one-word title, the subject of the poem; the second line is a pair of adjectives describing that title; the third line is a three-word phrase that gives more information about the subject (often a list of three gerunds); the fourth line consists of four words describing feelings related to that subject; and the fifth line is a single word synonym or other reference for the subject from line one (see Table 5.3). 
Table 5.3. Structure of A Didactic Cinquain Poem 
Line  Word Count  Description  
Line 1  1 word  One noun (subject)  
Line 2  2 words  Two adjectives describing the subject  
Line 3  3 words  Three verbs in -ing form giving more information about the subject  
Line 4  4 words  A four-word phrase (or sentence) describing feelings  
Line 5  1 word  One noun (synonym of line 1)  

An example of Didactic Cinquain ÒSnowÓ (Figure 5.5): 
Snow 
Silent, White Dancing, Falling, Drifting Covers Everything It Touches Blanket 

More Cinquain Examples:  
Graduation  EdTPA  
Bitter, Sweet  Repetitive, Redundant  
Fulfilling, Exciting, Gratifying  Reflecting, Crying, Terrifying  
We Are Finally Done!  This Is So Stupid!!  
Commencement  Death  

Integrating Poetry in the Curriculum 
Poetry is a great tool for students to express authentic learning creatively and can be integrated into all content areas. In the classroom, building a poetry club or forming a poetry circle can encourage poetry reading, practice, and creation. The teacher could also create a poetry billboard for students to share their poems. StudentsÕ poetic expression is limited to the classroom. Their observations from authentic learning environment, such as field trips and zoo, provide many wonderful opportunities for them to express their learning poetically and creatively (Shubitz, 2017). Lived experiences from visiting museums, holiday breaks, vacation, or other excursions, can also become the platform for poetry integration to stimulate studentsÕ imagination and creativity. 
In integrating poetry in the classroom, Schoch (n.d.) suggested using poetry with the following strategies in mind: 
. 
Activate prior knowledge 

. 
Establish theme 

. 
Explore language 

. 
Focus on facts 

. 
Set a scene 

. 
Inspire writing 

. 
See new perspectives 

. 
Ignite curiosity 

. 
Provide pleasure 

. 
Capture character 


Poetry is powerful in multiple aspects of learning. Poetry can be used to improve literacy, language arts reading fluency and comprehension, and to promote mathematical reasoning among students, especially those who learn linguistically (Martin, 2008; Stange (2008)). Poetry is effective in classroom management, character building, socialization, and learning community (Martin, 2008; Stange, 2008). Poetry plays a pivotal role in the whole-child approach in education. 
Poetry let students to see the beauty and power of language; integrating poetry in all content areas engage students in new perspectives, mathematical reasoning, language analytical thinking, and scientific inquiry. Poetry can be integrated as a central thematic element in the classroom to reinforce student learning in virtually every content area and to create a positive learning environment where students work cooperatively to express their learning, thoughts, and feelings creatively (Martin, 2008). 
REFERENCES 
Abondolo, D. (2001). A poetics handbook: Verbal art in the European tradition. London, UK: Psychology Press, Ltd. 
Abrams, M. H., & Harpham, G. G. (2014). A glossary of literary terms (11th ed.). Boston, MA: Cengage. 
Abu-Mahfouz, A. (2008). Translation as a blending of cultures. Journal of Translation, 4(1).  Retrieved from http://ftp.sil.org/siljot/2008/1/51140/siljot2008-1-01.pdf 
Adams, S. J. (1997). Poetic designs: An introduction to meters, verse forms and figures of speech. Peterborough, CA: Broadview Press. 
Ahl, F., & Roisman, H. M. (1996). The odyssey reformed. Ithaca, NY: Cornell University Press.  
Akhundi, A. (n.d.). Goethe. Retrieved from https://web.archive.org/web/20150905080250/http://www.lifeofthought.com/e69.htm 
Alakalay-Gut, K. (1985, May). Death, order, and poetry. American Literature, 57(2), 263-289. Alighieri, D., & Pinsky, R. (Trans.). (1994). Introduction the inferno of Dante: A new verse translation. New York, NY: Farrar, Straus & Giroux. 
Alim, H. S., Ibrahim, A., & Pennycook, A. (Eds.). (2008). Global linguistic flows. New York, NY: 
Routledge. Annis, W. S. (2006, January). Introduction to Greek meter. Retrieved from http://www.aoidoi.org/articles/meter/intro.pdf 
Aristotle. (n.d.). Poetics (translated by S. H. Butcher, 2008). Retrieved from 
http://www.gutenberg.org/files/1974/1974-h/1974-h.htm Arsu, S. (2006, February 14). Oldest line in the world. New York Times. Retrieved from https://www.nytimes.com/2006/02/14/world/europe/the-oldest-line-in-the-world.html 
Auden, W. H. (1945). Villanelle. In Auden, W. H., Collected poems. New York, NY: Random House. Bala Sundara Raman, L., Ishwar, S., & Ravindranath, S. K. (2003). Context free grammar for natural 
language constructs: An implementation for Venpa class of Tamil poetry. Retrieved from http://www.infitt.org/ti2003/papers/19_raman.pdf Barfield, O. (1987). Poetic diction: A study in meaning (2nd ed.). Middletown, CT: Wesleyan University 
Press. Bishop, E. (1976). One Art.  In E. Bishop, Geography III. New York City, NY: Farrar, Straus & Giroux. Black, J. (Ed.) (2011). Broadview anthology of British literature (Vo. 1). Peterborough, CA: Broadview 
Press.  
Blank, P. (1996). Broken English: Dialects and the politics of language in Renaissance writings. New York, NY: Routledge.  Blasing, M. K. (2006). Lyric poetry: The pain and the pleasure of words. Princeton, NJ: Princeton 
University Press.  
Bogges, W. F. (1968). Hermannus Alemannus' Latin anthology of Arabic poetry. Journal of the American Oriental Society, 88(4), 657-670. Bohn, W. (1993). The aesthetics of visual poetry. Chicago, IL: University of Chicago Press. Brogan, T. V. F. (Ed.). (1995). The Princeton handbook of multicultural poetries. Princeton, NJ: 
Princeton University Press. Brower, R. H., & Miner, E. (1988). Japanese court poetry. Palo Alto, CA: Stanford University Press.  
Burnett, C. (2001). Learned knowledge of Arabic poetry, rhymed prose, and didactic verse from Petrus Alfonsi to Petrarch. In Poetry and philosophy in the middle ages: A festschrift for Peter Dronke (pp. 29.62). Netherlands: Brill Academic Publishers. 
Campo, J. E. (2009). Encyclopedia of Islam. Netherlands: Brill Publishers. 
Chandler, D. (1997, August 11.) Introduction to genre theory. Retrieved from http://visual.memory.co.uk/daniel/Documents/intgenre/intgenre.html Corn, A. (1997). The poem's heartbeat: A manual of prosody. Pasadena, CA: Storyline Press.  Crapsey, A. (1922). Verse. New York, NY: Alfred A. Knopf. Retrieved from 
https://quod.lib.umich.edu/a/amverse/BAE8954.0001.001?view=toc 
Crisp, P. (2005). Allegory and symbol-a fundamental opposition? Language and Literature, 14(4), 323.338. Dalrymple, R. (Ed.). (2004). Middle English literature: A guide to criticism. Hoboken, NJ: Blackwell 
Publishing. 
Davis, A., & Jenkins, L. M. (Eds.). (2007). The Cambridge companion to modernist poetry. Cambridge, UK: Cambridge University Press.  Dolby, W. (1983). Early Chinese plays and theatre. In C. Mackerras, Chinese theater: From its origins to 
the present day (p. 17). Honolulu, HI: University of Hawaii Press.  
Dominik, W. J., & Wehrle, T. (1999). Roman verse satire: Lucilius to Juvenal. Mundelein, IL: Bolchazy-Carducci.  Drury, J. (2006). The poetry dictionary. Cincinnati, OH: WriterÕs Digest Books. Dutcher, R. (Ed.). (2005). The alchemy of stars. Rockville, MD: Wildside Press. Ebrey, P. (1993). Chinese civilization: A sourcebook (2nd ed.). Mankato, MN: The Free Press.  Eliot, T. S. (1999). The function of criticism. In Selected essays (pp. 13-34). London, UK: Faber & Faber. 
Examples of English metrical systems. (n.d.). retrieved from http://www.unibl.eu/pdf/examples_metrical_systems.pdf 
Faurot, J. L. (1998). Drinking with the moon. San Francisco, CA: China Books & Periodicals.  Freedman, D. N. (1972, July). Acrostics and metrics in Hebrew poetry. Harvard Theological Review, 65 (3), 367-392. 
Frow, J. (2007). Genre (Reprint Ed.). Abington, UK: Routledge. Fussell, P. (1965). Poetic meter and poetic form. New York, NY: Random House. Garison, D. (2002). An introduction to the American Cinquin. Amaze: The Cinquain Journal, 1(1). 
Retrieved from http://www.amaze-cinquain.com/vol_1_no_1/v1n1articleDG.html 
Gayley, C. M., & Young, C. C. (2005). English poetry (Reprint ed.). Whitefish, MT: Kessinger 
Publishing.  Gentz, J. (2008). Ritual meaning of textual form: Evidence from early commentaries of the historiographic and ritual traditions. In M. Kern, Text and ritual in early China (pp. 124-148). Seattle, WA: University of Washington Press.  
Gilbert, R. (2004). The disjunctive dragonfly. Modern Haiku, 35(2), 21-44. 
Goody, J. (1987). The interface between the written and the oral. Cambridge, UK: Cambridge University Press.  Gray, T. (2000). English lyrics from Dryden to Burns. Port Chester, NY: Adegi Graphics LLC. Grendler, P. F. (2004). The universities of the Italian renaissance. Baltimore, MD: Johns Hopkins 
University Press. Habib, R. (2005). A history of literary criticism. Hoboken, NJ: John Wiley & Sons.  Hainsworth, J. B. (1989). Traditions of heroic and epic poetry. Cambridge, UK: Modern Humanities 
Research Association. Hartman, C. O. (1980). Free verse an essay on prosody. Evanston, IL: Northwestern University Press. Heath, M. (Ed.). (1997). Aristotle's poetics. London, UK: Penguin Books. Highet, G. (1985). The classical tradition: Greek and Roman influences on western literature (Reissued 
ed.). Oxford, UK: Oxford University Press. 
Hoivik, S., & Luger, K. (2009). Folk media for biodiversity conservation: A pilot project from the Himalaya-Hindu Kush. International Communication Gazette, 71(4), 321-346. Hollander, J. (1981). Rhyme's reason. New Haven, CT: Yale University Press. James, E. D., & Jondorf, G. (1994). Racine: Phdre. Cambridge, UK: Cambridge University Press.  Jorgens, E. B. (1982). The well-tun'd word: Musical interpretations of English poetry 1597-1651. 
Minneapolis, MN: University of Minnesota Press.  
Kampf, R. (2010). Reading the visual-17th century poetry and visual culture. Mchen, DE: GRIN Verlag. Kant, I., & Bernard, J. H. (Trans.). (1914). Critique of judgment. Basingstoke, UK: Macmillan. Keith, A. B. K. (1992). Sanskrit drama in its origin, development, theory and practice. Sanskrit, IN: 
Motilal Banarsidass.  Kennedy, D. (2007). Elegy. New York, NY: Routledge. Khan, S. M. S. A. (1936, November 9). Hafiz and the place of Iranian culture in the world. Retrieved 
from https://iis.ac.uk/content/hafiz-and-place-iranian-culture-world 
Kiparsky, P. (1973, Summer). The role of linguistics in a theory of poetry. Daedalus, 102(3), 231-244. 
Kiparsky, P. (1975, September). Stress, syntax, and meter. Language, 51(3), 576-616. doi:10.2307/412889 Kirk, G. S. (2010). Homer and the oral tradition (Reprint ed.). Cambridge, UK: Cambridge University 
Press. 
Kuiper, K. (Ed.). (2011). Poetry and drama literary terms and concepts. New York, NY: The Rosen Publishing Group. Kumin, M. (2002). Gymnastics: The Villanelle. In K. Varnes, An exaltation of forms: Contemporary 
poets celebrate the diversity of their art (p. 314). Ann Arbor, MI: University of Michigan Press. Liu, J. J. Y. (1990). Art of Chinese poetry. Chicago, IL: University of Chicago Press.  Longenbach, J. (1997). Modern poetry after modernism. Oxford, UK: Oxford University Press. Mark, J. J. (2014, August 13). The world's oldest love poem. Retrieved from 
https://www.ancient.eu/article/750/the-worlds-oldest-love-poem/ Martin, C. (2008). Poetry in the classroom. Retrieved from https://webcache.googleusercontent.com/search?q=cache:peXe0dr7uZUJ:https://discoverarchive.vanderbi 
lt.edu/bitstream/handle/1803/1309/MartinCapstone.doc%3Fsequence%3D1%26isAllowed%3Dy+&cd=6 &hl=en&ct=clnk&gl=us&client=firefox-b-1 McCllintock, M., Ness, P. M., & Kacian, J. (Eds.). (2003). The tanka anthology: Tanka in English from 
around the world. Winchester, VA: Red Moon Press.  
McTurk, R. (Ed.). (2004). Companion to old norse-icelandic literature and culture. Hoboken, NJ: Blackwell. Menocal, M. R. (2003). The Arabic role in medieval literary history. Philadelphia, PA: University of 
Pennsylvania Press. Minta, S. (1980). Petrarch and petrarchism. Manchester, UK: Manchester University Press.  Monte, S. (2000). Invisible fences: Prose poetry as a genre in French and American literature. Lincoln, 
NE: University of Nebraska Press.  Nabokov, V. (1964). Notes on prosody. Princeton, NJ: Bollingen Foundation.  Octavio Paz (1914-1998). (n.d.). Retrieved from https://www.poetryfoundation.org/poets/octavio-paz Osberg, R. H. (2001). I kan nat geeste: Chaucer's artful alliteration. In A. T. Gaylord, Essays on the art of 
Chaucer's verse (pp. 195-228).  Abingdon, UK: Routledge.  Ou, L. (2009). Keats and negative capability. Retrieved from https://books.google.com/books?id=ugyika9hWxcC&printsec=frontcover&dq=Ou,+L.+(2009).+Keats+a nd+negative+capability&hl=fr&sa=X&ved=0ahUKEwiJjKz_k8DaAhWpmOAKHfKQBngQ6AEIJzAA# 
v=onepage&q=Ou%2C%20L.%20(2009).%20Keats%20and%20negative%20capability&f=falseContinu 
um.  Paden, W. D. (Ed.). (2000). Medieval lyric: Genres in historical context. Champaign, IL: University of Illinois Press.  
Perloff, M. (2002). 21st-century modernism: The new poetics. Hoboken, NJ: Blackwell Publishers. 
Pigman, G. W. (1985). Grief and English Renaissance elegy. Cambridge, UK: Cambridge University Press.  Pinsky, R. (1998). The sounds of poetry. New York, NY: Farrar, Straus and Giroux.  Poetry. (2013a). In Oxford dictionary. Oxford, UK: Oxford University Press. Poetry. (2013b). In Merriam-Webster dictionary. Springfield, MA: Merriam-Webster, Inc. Poetry. (n.d.). Retrieved from http://www.dictionary.com/browse/poetry?s=t Post, E. (2002, October 16). Fever show. Lake Champlin Weekly. 
Quiller-Couch, A. (Ed.). (1900). Oxford book of English verse. Oxford, UK: Oxford University Press. Qureshi, R. B. (1990, Autumn). Musical gesture and extra-musical meaning: Words and music in the 
Urdu Ghazal. Journal of the American Musicological Society, 43(3), 457-497. doi:10.1525/jams.1990.43.3.03a00040 Robinson, M. (2015, February 5). On Edgar Allan Poe. Retrieved from 
http://www.nybooks.com/articles/2015/02/05/edgar-allan-poe/ 
Rombeck, T. (2005, January 22). Poe's little-known science book reprinted. Retrieved from http://www2.ljworld.com/news/2005/jan/22/poes_littleknown_science/ Russom, G. (1998). Beowulf and old Germanic metre. Cambridge, UK: Cambridge University Press. San Juan, E. (2004). Working through the contradictions from cultural theory to critical practice. 
Lewisburg, PA: Bucknell University Press. Sanders, N. K. (Trans.). (1972). The epic of Gilgamesh (Revised Ed.). London, UK: Penguin Books. Schimmel, A. (1988, Spring). Mystical poetry in Islam: The case of Maulana Jalaladdin Rumi. Religion & 
Literature, 20(1), 67-80. 
Schirokauer, C. (1989). A brief history of Chinese and Japanese civilizations (2nd ed.). San Diego, CA: Harcourt Brace Jovanovich. Schmidt, M. (Ed.). (1999). The Harvill book of twentieth-century poetry in English. New York, NY: 
Random House. Schoch, K. (n.d.). 10 ways to use poetry in your classroom. Retrieved from http://www.readingrockets.org/article/10-ways-use-poetry-your-classroom 
Schter, J. (2005). Rhythmic grammar. Berlin, DE: Walter de Gruyter.  
Sequeira, I. (1981, June 1). The mystique of the Mushaira. The Journal of Popular Culture, 15(1), 1-8. doi:10.1111/j.0022-3840.1981.4745121.x Shamel, S. (2013). Goethe and Hafiz. Bern, Switzerland: Peter Lang Publishing.  Sheets, G. A. (1981, Spring). The dialect gloss, Hellenistic poetics and Livius andronicus. American 
Journal of Philology, 102(1), 58-78. doi:10.2307/294154 
Shubitz, S. (2017, January 24). Six ways to incorporate poetry all year long. Retrieved from https://www.weareteachers.com/poetry-all-year-long/ Sperl, S. (Ed.). (1996). Qasida poetry in Islamic Asia and Africa. Netherlands: Brill Publishers. Stange, T. V. (2008). Poetry proves to be positive in the primary grades. Reading Horizons, 48(3). 
Retrieved from https://scholarworks.wmich.edu/cgi/viewcontent.cgi?referer=https://www.google.com/&httpsredir=1&arti cle=1083&context=reading_horizons 
Sterling, B. (2009, July 13). Web semantics: Asemic writing. Retrieved from https://www.wired.com/2009/07/web-semantics-asemic-writing/ 
Stillman, F. (1972). The poet's manual and rhyming dictionary. London, England: Thames & Hudson. Strand, B. (Ed.). (2005). Flowers of life: A selection of cinquains by William Soutar. Scotland, UK: QQ Press. 
Swedish Academy. (n.d.) The Nobel prize in literature 1992: Derek Walcott. Retrieved from https://www.nobelprize.org/nobel_prizes/literature/laureates/1992/press.html Thomas, D. (1952). Do not go gentle into that good night. In D. Thomas, Country sleep and other poems 
(p. 18). Cambridge, MA: New Directions Publications. Thompson, J. (1961). The founding of English meter. New York, NY: Columbia University Press.  Toleos, A. (n.d. a). The Crapsey cinquain and its variations. Retrieved from 
http://www.cinquain.org/theory.html Toleos, A. (n.d.b). 28 cinquains from Adelaide Crapsey's Verse. Retrieved from http://www.cinquain.org/cinquain.html Treglown, J. (1973). Satirical inversion of some English sources in Rochester's poetry. Review of English Studies, 24(93), 42-48. doi:10.1093/res/xxiv.93.42. Treip, M. A. (1994). Allegorical poetics and the epic: The Renaissance tradition to Paradise Lost. Lexington, KY: University Press of Kentucky. Walker-Jones, A. (2003). Hebrew for biblical interpretation. Atlanta, GA: Society of Biblical Literature. 
Wang, Y. (2004, June 1). Shige: The popular poetics of regulated verse.  T'ang Studies, 2004(22), 81-125. 
doi:10.1179/073750304788913221 Watson, B. (1971). Chinese Lyricism: Shih poetry from the Second to the twelfth century. New York, NY: Columbia University Press. 
Watten, B. (2003). The constructivist moment: From material text to cultural poetics. Middletown, CT: Wesleyan University Press. Wesling, D. (1980). The chances of rhyme. Berkeley, CA: University of California Press.  What is tetrameter? (n.d.). Retrieved from http://www.tetrameter.com/ Whitworth, M. H. (2010). Reading modernist poetry. Hoboken, NJ: Wiley-Blackwell. Yip, M. (2002). Tone: Cambridge textbooks in linguistics. Cambridge, UK: Cambridge University Press.  

SUGGESTED ACTIVITIES 
Creative writing prompts: Ideas, lists, and teaching resources. (2018). Retrieved from http://www.uniqueteachingresources.com/creative-writing-prompts.html 
Degnan, F. J. (2018). Poetry for the elementary classroom. Retrieved from http://teachersinstitute.yale.edu/curriculum/units/1991/4/91.04.06.x.html 
Fries-Gaither, J. (2008). The aurora: Inspiration for art and poetry integration. Retrieved from http://www.oercommons.org/courses/the-aurora-inspiration-for-art-and-poetry-integration/view 
How dance can teach literature: Five ways to use dance in your English class. (2017). Retrieved from https://artsedge.kennedy-center.org/educators/how-to/encouraging-arts/how-dance-can-teach-literature 
How to teach creative writing. (2016). Retrieved from http://www.creativewriting-bg.com/assets/HOW-TO-TEACH-CREATIVE-WRITING.pdf 
Jazz music, dance, and poetry: Exploring basic movements, melodies and poetic methods. (2017). Retrieved from https://artsedge.kennedy-center.org/educators/lessons/grade-3.4/Jazz_Music_Dance_And_Poetry.aspx 
Lesson plans for elementary grades. (2017). Retrieved from https://www.poets.org/poetsorg/lesson-plans 
Lesson plans for elementary grades. (2016). Retrieved from https://www.poetryarchive.org/lesson-plans/age-7-11 
Literature and poetry site for teachers. (2018). Retrieved from http://www.loc.gov/teachers/classroommaterials/themes/literature/ 
Poems to play with in class. (2010). Retrieved from http://schools.nyc.gov/documents/teachandlearn/Poems_to_Play_With_in_Class_final.pdf 
Poetry lesson plans for elementary grades. (2017, March 6). Retrieved from http://www.ncte.org/lessons/poetry 
Writing folktales: Identifying and using elements of folktales and tall tales. (2014). Retrieved from https://artsedge.kennedy-center.org/educators/lessons/grade-6-8/Writing_Folktales 
You too can Haiku. (2015). Retrieved from http://artsedge.kennedy-center.org/educators/lessons/grade-3-4/you_too_can_haiku.aspx 

TECHNOLOGY 
Clean writer. (2016). Retrieved from https://itunes.apple.com/au/app/clean-writer/id383001862?mt=8 
Language arts frenzy K-8 reading games. (2018). Retrieved from https://itunes.apple.com/us/app/language-arts-friendzy-k-8-grade-reading-games/id624475772?mt=8 Literacy apps. (2017). Retrieved from http://www.readingrockets.org/literacyapps My writing spot. (2018). Retrieved from https://www.mywritingspot.com/ Seven fabulous apps for language arts. (2016). Retrieved from 
https://www.scholastic.com/teachers/articles/teaching-content/7-fabulous-apps-language-arts/ 
Storykit. (2017). Retrieved from https://solutions.softonic.com/apps/storykit StorySkeleton (2015). Retrieved from https://www.storyskeleton.com/ Thinkamingo (2018). Retrieved from http://thinkamingo.com/lists-for-writers/ Toontastik. (2018). Retrieved from https://toontastic.withgoogle.com/ Writing prompts. (2017). Retrieved from https://www.reddit.com/r/WritingPrompts/ 
ADDITIONAL SOURCES 
WEBSITES 
Bringing poetry to the classroom, grades K-5. (2018). Retrieved from http://www.nea.org/tools/lessons/bringing-poetry-to-the-classroom-grades-K-5.html 
Cinquain resources. (2009). Retrieved from http://cinquain.org/links.html 
Drama and the literary arts. (2018). Retrieved from https://www.ket.org/education/resources/drama-literary-arts/#drama-and-the-literary-arts-video 
Free creative writing worksheets. (2017). Retrieved from http://www.tlsbooks.com/languageartscreativewriting.htm 
Fries-Gaither, J. (2008). Writing science-themed poetry in the elementary grades. Retrieved from http://www.oercommons.org/courses/writing-science-themed-poetry-in-the-elementary-grades/view 
Haiku: Another kind of poetry. (2014). Retrieved from http://www.anotherkindofpoetry.org.uk/anotherkind/ 
Haiku how-to: Articles on haiku writing. (2008). Retrieved from https://www.ahapoetry.com/h_info.html 
Haiku websites & resources. (2017). Retrieved from https://poetrysociety.org.nz/affiliates/haiku-nz/haiku-websites-resources/ 
Indrisano, R., Bryson, J., & Jones, M. (2015). Writing poetry in the elementary grades. Retrieved from http://www.bu.edu/sed/files/2010/11/Indrisano-and-Paratore.pdf 
Open content for English language arts (#OER). (2018). Retrieved from http://classroom-aid.com/2013/09/16/open-content-for-english-language-arts-oer/ 
Opp-Beckman, L. (2010). Cinquain poem activities. Retrieved from http://darkwing.uoregon.edu/~leslieob/cinquain.html 
Reading and writing poetry. (2005). Retrieved from http://unesdoc.unesco.org/images/0013/001395/139551e.pdf 
Write stories/making books. (2018). Retrieved from http://www.kidzone.ws/creative-writing/book.htm 

BOOKS AVAILABLE AT THE DALTON STATE COLLEGE LIBRARY 
Bowkett, S. (2010). Developing literacy and creative writing through story making: Story strands for 7.12 year olds. Maidenhead, UK: McGraw-Hill Education. 
Cox, C. (2012). Literature-based teaching in the content areas: 40 strategies for K-8 classrooms. Thousand Oaks, CA: SAGE Publications, Inc.  
Cremin, T., Goouch, K., & Lambirth, A. (2005). Creativity and writing: Developing voice and verve in the classroom. London, UK: Routledge.  
Gates, P. S., & Mark, D. H. (2010). Cultural journeys: Multicultural literature for elementary and middle school students. Lanham, MD: Rowman & Littlefield Publishers. 
Markus, P., & Blackhawk, T. (2015). To light a fire: 20 Years with the inside out literary arts project. Detroit, MI: Wayne State University Press.  
McEwan-Adkins, E. K. (2011). Literacy lookfors: An observation protocol to guide K-6 classroom walkthroughs. Retrieved from https://ebookcentral.proquest.com 
Popp, M. S. (2005). Teaching language and literature in elementary classrooms: A resource book for professional development. Mahwah, NJ: Routledge.  
Sedgwick, F. (1997). Read my mind: Young children, poetry and learning. London, UK: Routledge.  
Sedgwick, F. (2000). Writing to learn: Poetry and literacy across the primary curriculum. London, UK: Routledge.  

VIDEOS 
Basic literary terms, volume 6: Understanding poetry-rhythm and meter, rhyme [Video file]. (2017). Retrieved from Films on Demand database. 
Literary arts and drama [Video file]. (2006). Retrieved from https://www.ket.org/education/resources/drama-literary-arts/#drama-and-the-literary-arts-video 
Literary arts making words matter [Video file]. (2016). Retrieved from https://www.youtube.com/watch?v=vHJ24P4DoFs 
Meganathan, R. (2014). English language classroom: Teaching of poetry [Video file]. Retrieved from https://www.youtube.com/watch?v=L9FuNZspeAI 
Neibling, A. (2015). Introduction to poetry: The 3Rs [Video file]. Retrieved from https://www.youtube.com/watch?v=9ec7-Z2ilzg 
Patterson, C., & Denis, D. (2011). Literacy through creative dance [Video file]. Retrieved from https://www.teachingchannel.org/videos/literacy-through-creative-dance 
Richardson, K. (2015). Teaching strategies for introducing literature circles to a 4th grade class [Video file]. Retrieved from https://www.youtube.com/watch?v=khrmftWESQw 

SCHOLARLY JOURNAL ARTICLES 
Hume, A. (1999). Cinquain. Cedarville Review, 2, 21. Retrieved from http://digitalcommons.cedarville.edu/cedarvillereview/vol2/iss1/11 
Maxim, G. (1998). Writing poetry in the elementary social studies classroom. Social Education, 62(4), 207-211. 
Sorensen, M. K. (2010). Integrating art and literacy in the elementary classroom. Retrieved from http://scholarworks.uni.edu/hpt/30 
Tucker, S. D. (2017). The effects of arts integration on literacy comprehension achievement [Doctoral dissertation]. Retrieved from http://scholarcommons.sc.edu/etd/4205 
Weinstein, I. (2010). Igniting a passion for poetry in elementary school [Undergraduate thesis]. Retrieved from http://library.wcsu.edu/dspace/bitstream/0/534/1/Thesis+Project.pdf 

CHAPTER SIX PERFORMING ARTS 


SELECTED READING 
Performing arts are a form of art in which artists use their voices or bodies, often in relation to other objects, to convey artistic expression. Performing arts can help explain our emotions, expressions, and feelings (Oliver, 2010). It is different from visual arts, which is when artists use paint, canvas or various materials to create physical or static art objects. Performing arts include several disciplines, each performed in front of a live audience. Live performances before an audience are a form of entertainment. The development of audio and video recording has allowed for private consumption of the performing arts. Artists who participate in performing arts in front of an audience are called performers. Examples of these include actors, comedians, dancers, magicians, circus artists, musicians, and singers. Performing arts are also supported by workers in related fields, such as songwriting, choreography and stagecraft. Performers often adapt their appearance, such as with costumes and stage makeup, stage lighting, and sound. Theatre, music, dance, and other types of performances are present in all human cultures. The history of music and dance date to pre-historic times. More refined versions, such as ballet, opera performed professionally. 
Types of Performing Arts 
Theater/ChildrenÕs Theater 
Theater is the branch of performing arts that is concerned with acting out stories in front of an audience, using a combination of speech, gesture, music, dance, sound and spectacle (Figure 6.1). In addition to the standard narrative dialogue style of plays. Theatre takes such forms as plays, musicals, opera, ballet, illusion, mime, improvisational theatre, comedy, magic, pantomime, etc.  
Theater is a collaborative form of fine art that uses live performers, typically actors or actresses, to present the experience of a real or imagined event before a live audience in a specific place, often a stage. The performers may communicate this experience to the audience through combinations of gesture, speech, song, music, and dance. Elements of art, such as painted scenery and stagecraft such as lighting are used to enhance the physicality, presence and immediacy of the experience (Carlson, 1986). The specific place of the performance is also named by the word "theater" as derived fromtheAncient Greek.......(thŽatron, "a place for viewing") itself from ....... (the‡omai, "to see", "to watch", "to observe"). 
Children's theateris formalchildrenÕsperformances. It includesorganizations thatare dedicated to children and theater. ChildrenÕs theater focuses on performing arts types such as plays, puppet shows, etc., that are intended for a young audience. ChildrenÕs theater also includes the audiences and buildings that are 
dedicated to children's theater. 
Figure 6.1. Public Performance in Jade Dragon Snow Mountain Open Air Theatre 

Dance 
In the context of performing arts, dance generally refers to human movement, typically rhythmic and to music, used as a form of audience entertainment in a performance setting (Figure 6.2). Definitions of what constitutes dance are dependent on social, cultural, aesthetic artistic and moral constraints and range from functional movement (such as folk dance) to codified, virtuoso techniques such as ballet (Mackrell, n.d.; Figure 6.3). 
Figure 6.2. Dance a Type of Performing Art Practiced All Over the World 


There is one another modern form of dance that emerged in 19th-20th century with the name of Free-Dance style. This form of dance was structured to create a harmonious personality which included features such 
as physical and spiritual freedom. Isadora Duncan was the first female dancer who argued about Òwoman of futureÓ and developed novel vector of choreography using NietzscheÕs idea of Òsupreme mind in free mindÓ (Nana, 2015, p. 65). 
Dance is a powerful impulse, but the art of dance is that impulse channeled by skillful performers into something that becomes intensely expressive and that may delight spectators who feel no wish to dance themselves. These two concepts of the art of dance-dance as a powerful impulse and dance as a skillfully choreographed art (choreography is the art of making dances, and the person who practices this art is called a choreographer) practiced largely by a professional few-are the two most important connecting ideas running through any consideration of the subject. In dance, the connection between the two concepts is stronger than in some other arts, and neither can exist without the other (Mackrell, n.d.). 
Music 
Music is an art form which combines pitch, rhythm, and dynamic in order to create sound. It can be performed using a variety of instruments and styles and is divided into genres such as classical music, art music, music for religious ceremonies, folk, jazz, hip hop, pop, and rock, etc. As an art form, music can occur in live or recorded formats, and can be planned or improvised. As music is a protean art, it easily coordinates with words for songs as physical movements do in dance. Moreover, it has a capability of shaping human behaviors as it impacts our emotions (Epperson, n.d.). However, the creation, performance, significance of music can vary according to culture and social context. Music creation and performance can range from strictly organized compositions-such as classical music symphonies from the 1700s and 1800s, through to spontaneously played improvisational music such as jazz, and contemporary music from the 20th and 21st centuries. 
Acrobatics 
Acrobatics is the performance of extraordinary human feats of balance, agility, and motor coordination (Figure 6.4). It can be found in many of the performing arts, sports (sporting) events, and martial arts. Acrobatics is most often associated with activities that make extensive use of gymnastic elements, such as acro dance, circus, and gymnastics, but many other athletic activities-such as ballet and diving-may also employ acrobatics. Although acrobatics is most commonly associated with human body performance, it may also apply to other types of performance, such as aerobatics. 
Figure 6.4. Chinese Acrobat in Midair 

Ballet 
Ballet is a type of performance dance (Figure 6.5) that originated during the Italian Renaissance in the 15th century and later developed into a concert dance form in France and Russia. It has since become a widespread, highly technical form of dance with its own vocabulary based on French terminology. It has been globally influential and has defined the foundational techniques used in many other dance genres and cultures. Ballet has been taught in various schools around the world, which have historically incorporated their own cultures to evolve the art. 

Because ballet became formalized in France, a significant part of ballet terminology is in the French language (Glossary of Ballet, n.d.). Ballet vocabulary words examples are below: 
Allegro. Brisk, lively motion. 1. An attribute of many movements, including those in which a dancer is airborne (e.g., assemblŽ, changement, entrechat, sautŽ, sissonne, soubresaut). 2. Used in ballet to refer to all jumps, regardless of tempo. 3. A category of exercises found in a traditional ballet class, e.g. petit allegro (small, generally fast jumps) and grand allegro (large, generally slower jumps). 
AssemblŽ. A jump that lands on two feet. When initiated from two feet, the working leg performs a battement glissŽ/dŽgagŽ, brushing out. The dancer launches into a jump, with the second foot then meeting the first foot before landing. A petit assemblŽ is when a dancer is standing on one foot with the other extended. The dancer then does a small jump to meet the first foot. 
Attitude. A position in which a dancer stands on one leg (the supporting leg) while the other leg (working leg) is raised and turned out with knee bent to form an angle of approximately 90¡ between the thigh and the lower leg. The height of the knee versus the foot and the angle of the knee flexion will vary depending on the techniques. The working leg can be held behind (derrire), in front (devant), or to the side (ˆ la seconde) of the body. The alignment of the thigh compared to the midline in Attitude derrire will vary depending on the techniques. The foot of the supporting leg may be flat on the floor, en demi-pointe (ball of the foot), or en pointe (tips of the toes). The standing leg can be straight or bend ("fondu") (Figure 6.6). 
Figure 6.6. Attitude 

BalancŽ. A rocking sequence of three steps-fondu, relevŽ, fondu (down, up, down)-executed in three counts. Before the first count, one foot extends in a dŽgagŽ to second position (balancŽ de cŽ) or to the front (balancŽ en avant) or rear (balancŽ en arrire). The second foot in the sequence (in any direction) assembles behind the first to relevŽ in fifth or fourth position (Figure 6.7). 

A ballet, a work, consists of the choreography and music for a ballet production. A well-known example of this is The Nutcracker, a two-act ballet originally choreographed by Marius Petipa and Lev Ivanov with a music score by Pyotr Ilyich Tchaikovsky. Ballets are choreographed and performed by trained ballet dancers. Traditional classical ballets are usually performed with classical music accompaniment and use elaborate costumes and staging, whereas modern ballets, such as the neoclassical works of American choreographer George Balanchine, often are performed in simple costumes (e.g., leotards and tights) and without the use of elaborate sets or scenery. 
Circus and Clown 
A circus is a company of performers who put on diverse entertainment shows that include clowns, acrobats, trained animals, trapeze acts, musicians, dancers, hoopers, tightrope walkers, jugglers, magicians, unicyclists, as well as other object manipulation and stunt-oriented artists. Circus skills are performed as entertainment in circus, sideshow, busking, or variety, vaudeville or music hall shows. Most circus skills are still being performed today. Many are also practiced by non-performers as a hobby. 
In the circus, a clown (Figure 6.8) may perform a circus role: 
. 
Walk a tightrope, a highwire, a slack rope or a piece of rope on the ground. 

. 
Ride a horse, a zebra, a donkey, an elephant or even an ostrich. 

. 
Substitute himself in the role of "lion tamer." 

. 
Act as "emcee", from M.C. or Master of Ceremonies, the preferred term for a clown taking on the role of "Ringmaster." 

. 
"Sit in" with the orchestra, perhaps in a "pin spot" in the center ring, or from a seat in the audience. 

. 
Anything any other circus performer might do. It is not uncommon for an acrobat, a horse-back rider or a lion tamer to secretly stand in for the clown, the "switch" taking place in a brief moment offstage. 



Special terms are used in reference a clownÕ role in the performance: 
Gags, Bits and Business. Business-the individual motions the clown uses, often used to express the clown's character. Gag-very short piece of clown comedy that, when repeated within a "bit" or "routine," may become a running gag. Gags are, loosely, the jokes clowns play on each other. A gag may have a beginning, a middle, and an end-or may not. Gags can also refer to the prop stunts/tricks or the stunts that clowns use, such as a squirting flower. Bit-the clown's sketch or routine, made up of one or more "gags" either worked out and timed before going on stage, or impromptu bits composed of familiar improvisational material. 
Menu. EntrŽe-clowning acts lasting 5-10 minutes. Typically made up of various gags and bits, usually within a clowning framework. EntrŽes almost always end with a "blow-off"-the comedic ending of a show segment, "bit," "gag," "stunt," or "routine." Side dish-shorter feature act. Side dishes are essentially shorter versions of the "entrŽe," typically lasting 1-3 minutes. Typically made up of various "gags" and "bits," side dishes are usually within a clowning framework. Side dishes almost always end with a "blow-off." 
Interludes. "Clown Stops" or "interludes" are the brief appearances of clowns in a circus while the props and rigging are changed. These are typically made up of a few gags or several bits. Clown stops will always have a beginning, a middle, and an end to them, invariably culminating in a blow-off. These are also called "reprises" or "run-ins" by many, and in today's circus they are an art form in themselves. Originally, they were bits of "business" usually parodying the act that had preceded it. If for instance there had been a tightrope walker the reprise would involve two chairs with a piece of rope between and the clown trying to imitate the artiste by trying to walk between them, with the resulting falls and cascades bringing laughter from the audience. Today, interludes are far more complex, and in many modern shows the clowning is a thread that links the whole show together. 
Prop stunts. Among the more well-known clown stunts are: squirting flower; the "too-many.clowns-coming-out-of-a-tiny-car" stunt; doing just about anything with a rubber chicken, tripping over one's own feet (or an air pocket or imaginary blemish in the floor) or riding any number of ridiculous vehicles or "clown bikes." Individual prop stunts are generally considered individual bits. 
Magic 
Magic, along with its subgenres of, and sometimes referred to as illusion, stage magic or street magic is a performing art in which audiences are entertained by staged tricks or illusions of seemingly impossible feats using natural means (Foley, 2016; Gibson, 2016; Figure 6.9; Figure 6.10). It is to be distinguished from paranormal magic which, it is claimed, are effects created through supernatural means. It is one of the oldest performing arts in the world. 
Opinions vary among magicians as to how to categorize a given effect in a magic performance. Some commonly used descriptions are below: 
Production: The magician produces something from nothing-a rabbit from an empty hat, a fan of cards from thin air, a shower of coins from an empty bucket, a dove from a pan, or the magician himself or herself, appearing in a puff of smoke on an empty stage-all of these effects are productions. 
Vanish: The magician makes something disappear-a coin, a cage of doves, milk from a newspaper, an assistant from a cabinet, or even the Statue of Liberty. A vanish, being the reverse of a production, may use a similar technique in reverse. 
Transformation: The magician transforms something from one state into another-a silk handkerchief changes color, a lady turns into a tiger, an indifferent card changes to the spectator's chosen card. 
Restoration: The magician destroys an object-a rope is cut, a newspaper is torn, a woman is cut in half, a borrowed watch is smashed to pieces-then restores it to its original state. 
Transposition: This is whereby two or more objects are used in play. The magician will cause these objects to change places, as many times as he pleases, and in some cases, ends with a kicker by transforming the objects into something else. 
Transportation: The magician causes something to move from one place to another-a borrowed ring is found inside a ball of wool, a canary inside a light bulb, an assistant from a cabinet to the back of the theatre, or a coin from one hand to the other. When two objects exchange places, it is called a transposition: a simultaneous, double transportation. A transportation can be seen as a combination of a vanish and a production. When performed by a mentalist it might be called teleportation. 
Escape: The magician (or less often, an assistant) is placed in a restraining device (i.e., handcuffs or a straitjacket) or a death trap, and escapes to safety. Examples include being put in a straitjacket and into an overflowing tank of water and being tied up and placed in a car being sent through a car crusher. 
Levitation: The magician defies gravity, either by making something float in the air, or with the aid of another object (suspension)-a silver ball floats around a cloth, an assistant floats in mid-air, another is suspended from a broom, a scarf dances in a sealed bottle, and the magician hovers a few inches off the floor. There are many popular ways to create this illusion, including Asrah levitation, Balducci levitation, and King levitation. 
Penetration: The magician makes a solid object pass through another-a set of steel rings link and unlink, a candle penetrates an arm, swords pass through an assistant in a basket, a salt shaker penetrates a tabletop, or a man walks through a mirror. Sometimes referred to as "solid-through.solid." 
Prediction: The magician accurately predicts the choice of a spectator or the outcome of an event-a newspaper headline, the total amount of loose change in the spectator's pocket, a picture drawn on a slate-under seemingly impossible circumstances. 
Figure 6.9. The Conjurer (1475-1480) by Hieronymus Bosch/Workshop 


Mime Show 
A mime or mime artist is a person who uses mime as a theatrical medium or as a performance art. Miming involves acting out a story through body motions, without use of speech. In earlier times, in English, such a performer would typically be referred to as a mummer. Miming is distinguished from silent comedy, in which the artist is a seamless character in a film or sketch. 
Jacques Copeau, strongly influenced by Commedia dell'arte and Japanese Noh theatre, used masks in the training of his actors. ƒtienne Decroux, a pupil of his, was highly influenced by this and started exploring and developing the possibilities of mime and developed corporeal mime into a highly sculptural form, taking it outside the realms of naturalism. Jacques Lecoq contributed significantly to the development of mime and physical theatre with his training methods (Callery, 2001). 
Opera 
Opera is a form of theatre in which music has a leading role and the parts are taken by singers. Such a 'work' (the literal translation of 'opera') is typically a collaboration between a composer and a librettist and incorporates a number of the performing arts, such as acting, scenery, costumes and sometimes dance or ballet. The performance is typically given in an opera house, accompanied by an orchestra or smaller musical ensemble, which since the early 19th century has been led by a conductor (Figure 6.11; Figure 6.12; Figure 6.13). 
Opera is a key part of the Western classical music tradition. Originally understood as an entirely sung piece, in contrast to a play with songs, opera has come to include numerous genres, including some that include spoken dialogue such as musical theater, Singspiel and OpŽra comique. In traditional number opera, singers employ two styles of singing: recitative, a speech-inflected style (Apel, 1969, p. 718) and self-contained arias. The 19th century saw the rise of the continuous music drama. 

Figure 6.11. Performers from the Atlanta Opera sing the finale of Lucia di Lammermoor. The opera orchestra is visible in the lowered area in front of the stage. 


Puppetry 
Puppetry is a form of theatre or performance that involves the manipulation of puppets-inanimate objects, often resembling some type of human or animal figure, that are animated or manipulated by a human called a puppeteer (Figure 6.14; Figure 6.15). Such a performance is also known as a puppet play/puppet show. The puppeteer uses movements of her hands, arms, or control devices such as rods or strings to move the body, head, limbs, and in some cases the mouth and eyes of the puppet. The puppeteer often speaks in the voice of the character of the puppet, and then synchronizes the movements of the puppet's mouth with this spoken part. The actions, gestures and spoken parts acted out by the puppets are typically used in storytelling. 
There are many different varieties of puppets, and they are made of a wide range of materials, depending on their form and intended use. They can be extremely complex or very simple in their construction. The simplest puppets are finger puppets, which are tiny puppets that fit onto a single finger, and sock puppets, which are formed from a sock and operated by inserting one's hand inside the sock, with the opening and closing of the hand simulating the movement of the puppet's "mouth". A hand puppet is controlled by one hand which occupies the interior of the puppet and moves the puppet around (Punch and Judy puppets are familiar examples of hand puppets). A "live-hand puppet" is similar to a hand puppet but is larger and requires two puppeteers for each puppet. Marionettes are suspended and controlled by a number of strings, plus sometimes a central rod attached to a control bar held from above by the puppeteer. 
Puppetry is a very ancient form of theatre which was first recorded in the 5th century B.C. in Ancient Greece. Some forms of puppetry may have originated as long ago as 3000 years B.C. (Blumenthal, 2005). Puppetry takes many forms, but they all share the process of animating inanimate performing objects to tell a story. Puppetry is used in almost all human societies both as entertainment-in performance-and ceremonially in rituals and celebrations such as carnivals (Bell, 2002). 


Speech 
Speech (also called oratory or oration) is the process or act of performing a talk to a live audience (Figure 6.16). Public speech is deliberately structured with three general purposes: to inform, to persuade and to entertain (Beall, n.d.). Speech is commonly understood as formal, face-to-face speaking of a single person to a group of listeners (Beall, n.d.). Public speech can be governed by different rules and structures. For example, speeches about concepts do not necessarily have to be structured in any special way. However, there is a method behind giving it effectively. For this type of speech, it would be good to describe that concept with examples that can relate to the audienceÕs life (Valenzano III & Braden, 2015). 
Performing a speech can serve the purpose of transmitting information, telling a story, motivating people to act or some combination of those. Speech can also take the form of a discourse community, in which the audience and speaker use discourse to achieve a common goal. In short, the speaker should be answering the question "who says what in which channel to whom with what effect?" (Public Speaking, n.d.). 

Figure 6.16. The Roman orator Cicero speaks to the Roman Senate. 
Ventriloquism 
Ventriloquism, or ventriloquy, is an act of stagecraft in which a person (a ventriloquist) changes his or her voice so that it appears that the voice is coming from elsewhere, usually a puppeteered "dummy" (Figure 6.17; Figure 6.18). The act of ventriloquism is ventriloquizing, and the ability to do so is commonly called in English the ability to "throw" one's voice. 
One challenge ventriloquists face is that all the sounds that they make must be made with lips slightly separated. For the labial sounds f, v, b, p, and m, the only choice is to replace them with others. A widely parodied example of this difficulty is the "gottle o' gear", from the reputed inability of less skilled practitioners to pronounce "bottle of beer" (Burton, Davey, Lewis, Ritchie, & Brooks, 2008, p. 10). If variations of the sounds th, d, t, and n are spoken quickly, it can be difficult for listeners to notice a difference. 
Modern ventriloquists use a variety of different types of puppets in their presentations, ranging from soft cloth or foam puppets (Verna Finly's work is a pioneering example), flexible latex puppets (such as Steve Axtell's creations) and the traditional and familiar hard-headed knee figure (Tim Selberg's mechanized carvings) (Figure 6.17; Figure 6.18). The classic dummies used by ventriloquists (the technical name for which is ventriloquial figure) vary in size anywhere from twelve inches tall to human-size and larger, with the height usually falling between thirty-four and forty-two inches. Traditionally, this type of puppet has been made from paper or wood. In modern times, other materials are often employed, including fiberglass-reinforced resins, urethanes, filled (rigid) latex, and neoprene (Look Inside a Dummy's Head, 1954, pp. 154-157). 
Figure 6.17. A Ventriloquist Entertaining Children at the Pueblo, Colorado, Buell Children's Museum 


Integrating Performing Arts in the Classroom 
Integrating performing arts in the classroom have been found to be successful and accessible to learners in the learning process across all subject areas of math, social studies, science, and language arts (Bradley, Bonbright, & Dooling, 2013; Brock, 2011; Burstein & Knotts, 2011; Cravath, 2011; Moore, 2004; Rajan, 2012). Performing arts integrated in content areas promotes creativity in problem solving, creative expression, social skills, and learner development (Brock, 2011; Gidcumb, 2014; Moore, 2004). 
Academically, performingartsintegration improvesstudentsÕlearning. Forexample, studentsÕperformance 
has improved with theater arts integrated in their studies in math and other subject areas (Balingit, 2016; Brock, 2011). Students showed deeper learning and longer retention of knowledge as well. Performing arts integrated learning is active and multi-sensory (Burstein & Knotts, 2011). Unlike the traditional methods, which focus primarily on verbal and auditory learners, performing arts integrated methods engage a variety of learners such as music and kinesthetic inclined learners. In addition to academic effects, performing arts integration helps develop non-cognitive factors such as attitude to school, moral for learning, engagement, self-confidence, self-expression, and collaboration. Studies have shown integrating performing arts in the classroom had resulted in positive attitude toward school, increased moral for learning, higher level of confidence, and more collaboration with others (Moore, 2004; Rajan, 2012). 
In elementary classrooms, performing arts could be implemented creatively through a variety of activities. Gidcumb (2014) suggested five ideas of activities for any classroom to get started: 1. ActorÕs Toolbox; 2. Tableau; 3. Tapping In; 4. Stepping Into the Painting; and 5 Biography Drama. Activities based on performing arts such as drama are fund to learn and conducive to knowledge retention and learner development. Dramatic activities activate three domains of learner development, cognitive domain, affective domain, and psychomotor domain (Moore, 2004). By participating in performing activities, students learn the text by actively involving their body, mind, and emotions in the learning process. In language arts, performing arts allow students to see multiple perspectives by role playing characters and scenes and reflecting on behaviors, situations, and personalities in the context; through performing the text and story line, performing arts allows students opportunities to demonstrate a deep understanding of pieces of literature (Gidcumb, 2014; Moore, 2004). 
In Social Studies, the curriculum lends itself for performing arts integration. Performing arts allow for multiple views of culture and historical events. Using performing arts in the learning process also provides students a multi-sensory approach to learning social studies content (Burstein & Knotts, 2011). The performing arts integration includes the use of music and provides an alternative communication system for students to express what they know and feel (Burstein & Knotts, 2011). When children learn difficult concepts in social studies, music can provide one pathway to communicate their understanding besides the more traditional forms of speaking and writing (Burstein & Knotts, 2011). Moor (2004) illustrated an example of learning Oregon Trail with drama integrated. In the example, students took on their roleÕs emotions as well. They became excited when they were able to accomplish or solve one of their problems. They showed disappointment and anger when they failed at finding food or other difficult situations. Not only did the students learn about the Oregon Trail, but they also learned how the pioneers lived and felt. In the example, the drama activity involves speech, sense, emotions, motor skills which are essential to learner development. Learning comes to live through performing.  
Performing arts such as dance provides an alternative way of communication and relate to studentsÕ daily 
life as well. In social studies, culture is the core of the subject. Performance allows of the multicultural aspects of culture to come to live through performing arts activities. When dance is integrated into the social study classroom, Burstein and Knotts (2011) conclude students gain a concrete understanding of what life was like in an alternate time period and make real and relevant connections to their dailylivesÉJust as in music, dance employs an alternative communication system by using the non-verbal forms; the human body and facial expressions to make sense of content (p. 241). Dance allows students to express emotions through use of their body while placing themselves in the context of a character, historical figure or everyday 
personÉDance is multicultural. Every culture has movement or dance that represents a history or ideals 
about that culture (p. 242). 
Other performing arts forms such as Ballet could be used in the classroom to learn social content as well. Burstein and Knotts (2011) gave the example of Westward Expansion with Ballet integrated. In the example, dance and movement could be used to enact the Westward Expansion; students can create dance movements to show the common daily activities of cowboys, families in wagon trains, and Native Americans; they can compile all the pieces into a ballet to demonstrate the events of people moving West in the 1800's (p. 242). By performing the historical event, students have the opportunity to immerse themselves in content and context in an alternative time period, which could be otherwise abstract and intangible to them. 
REFERENCES 
Apel, W. (Ed.). (1969). Harvard dictionary of music (2nd ed.). Cambridge, MA: The Belknap Press of Harvard University Press. 
Balingit, M. (2016, February 22). Teachers are using theater and dance to teach math and itÕs working. The Washington Post. Retrieved from https://www.washingtonpost.com/local/education/teachers-are.using-theater-and-dance-to-teach-math--and-its-working/2016/02/22/61f8dc0c-d68b-11e5-b195.2e29a4e13425_story.html?utm_term=.ba5f2a960a88 
Beall, J. (n.d.). General purpose of speaking. Retrieved from http://open.lib.umn.edu/publicspeaking/chapter/6-1-general-purposes-of-speaking/ 
Bell, J. (2002). Strings, hands, shadows: A modern puppet history. Detroit, MI: Detroit Institute of Art. 
Blumenthal, E. (2005). Puppetry and puppets, London, UK: Thames & Hudson. 
Bradley, K., Bonbright, J., & Dooling, S. (2013). Evidence: A report on the impact of dance in K-12 setting. Retrieved from https://www.arts.gov/sites/default/files/Research-Art-Works-NDEO.pdf 
Brock, J. (2011). Integrating theater arts into the classroom: The new responsibilities of the elementary school teacher [MasterÕs thesis]. Retrieved from https://files.eric.ed.gov/fulltext/ED519810.pdf 
Burstein, J., & Knotts, G. (2011). Integrating the visual-performing arts in the social studies curriculum=engagement and access. Retrieved from http://scholarworks.csun.edu/bitstream/handle/10211.2/3335/KnottsGreg2011HICE-01.pdf;sequence=1 
Burton, M., Davey, J., Lewis, M., Ritchie, L., & Brooks, G. (2008, November). Improving reading: Phonics and fluency. London, UK: National Research and Development Centre for Adult Literacy and Numeracy. Retrieved from http://dera.ioe.ac.uk/21964/1/doc_4338.pdf 
Callery, D. (2001). Through the body: A practical guide to physical theatre. London, UK: Nick Hern Books.  
Carlson, M. (1986).  Psychic polyphon. Journal of Dramatic Theory and Criticism, 35-47. Retrieved from https://journals.ku.edu/index.php/jdtc/article/view/1642/1606 
Cravath, E. (2011). Creative dance integration lesson plans. Retrieved from https://education.byu.edu/sites/default/files/ARTS/documents/educational_movement.pdf 
Epperson, G. (n.d.). Music. Retrieved from https://www.britannica.com/art/music 
Foley, E. (2016, March 15). Do you believe in magic? Congress does. The Huffington Post. Retrieved from https://www.huffingtonpost.com/entry/congress-magic_us_56e84adce4b0b25c91837454 
Gibson, B. (2016, March 18). David Copperfield is the magic force behind a must-read congressional resolution. The Washington Post. Retrieved from https://www.washingtonpost.com/lifestyle/style/david.copperfield-is-the-magic-force-behind-a-must-read-congressional-resolution/2016/03/17/eb0dde44-ec42.11e5-a6f3-21ccdbc5f74e_story.html?noredirect=on&utm_term=.88191a9a09e8 
Gidcumb, B. (2014, August 1). Integrating drama in the elementary classroom: Where do we begin? Retrieved from https://educationcloset.com/2014/08/01/integrating-drama-in-the-elementary-classroom.where-do-i-start/ 
Look inside a dummy's head. (1954, December). Popular Mechanics Magazine. Retrieved from https://books.google.com/books?id=yt0DAAAAMBAJ&pg=PA154#v=onepage&q&f=false 
Mackrell, J. (n.d.). Dance. Retrieved from https://www.britannica.com/art/dance 
Moore, M. (2004). Using drama as an effective method for teaching elementary students. Retrieved from http://commons.emich.edu/cgi/viewcontent.cgi?article=1112&context=honors 
Nana, L. (2015). Philosophical context of contemporary choreographic space. Musicology & Cultural Science, 11(1), 64-67. 
Oliver, S. A. (2010). Trauma, bodies, and performance art: Towards an embodied ethics of seeing. Continuum, 24(1), 119-129. doi:10.1080/10304310903362775 
Rajan, R. S. (2012). Integrating the performing arts in Grades K-5. Thousand Oaks, CA: Corwin. 
Valenzano III, J. M., & Braden, S. W. (2015). The speaker: The tradition and practice of public speaking (3rd ed.) Southlake, TX: Fountainhead Press. 

SUGGEESTED ACTIVITIES 
Arts education teacher handbook: Dance. (2002). Retrieved from http://www.ncpublicschools.org/docs/curriculum/artsed/resources/handbook/dance/dance-hbk.pdf 
Blueprint for teaching and learning in the arts in dance: Grades preK-12. (2005). Retrieved from http://schools.nyc.gov/offices/teachlearn/arts/blueprints/dance-blueprint.html 
Dance resources. (2015). Retrieved from https://artsedge.kennedy-center.org/themes/arts-resources-dance 
Dance toolkit (2017). Retrieved from https://www.ket.org/education/collections/dance-toolkit/ 
Gidcumb, B. (2014). Integrating drama in the elementary classroom: Where do we begin? Retrieved from https://educationcloset.com/2014/08/01/integrating-drama-in-the-elementary-classroom-where-do-i-start/ 
Jazz music, dance, and poetry: Exploring basic movements, melodies and poetic methods. (2014). Retrieved from https://artsedge.kennedy-center.org/educators/lessons/grade-3.4/Jazz_Music_Dance_And_Poetry.aspx 
Lesson plans for K-12 classroom and arts teachers. (2017). Retrieved from https://educationcloset.com/arts-integration-lessons/ 
K-6 visual and performing arts curriculum guide: Examples of integrated lessons. (2008). Retrieved from http://ccsesaarts.org/wp-content/uploads/2015/01/K-6-Visual-and-Performing-Arts-Curriculum-Guide.pdf 
Using drama in the English classroom. (2015). Retrieved from http://www.edb.gov.hk/attachment/en/curriculumdevelopment/resourcesupport/net/networking_drama_pa rt%201.pdf 
TECHNOLOGIES 
Ballet lite. (2017). Retrieved from https://itunes.apple.com/us/app/ballet-lite/id328294889?mt=8 
Buddy dance companion. (2018). Retrieved from http://www.buddyonline.com.au/ 
Dance school stories-Dance dreams come true. (2018). Retrieved from https://play.google.com/store/apps/details?id=com.crazylabs.dance.school 
Drama prop box. (2015). Retrieved from https://dramaresource.com/prop-box/ iTheatre. (2015). Retrieved from https://dramaresource.com/itheatre/ 
Play book dance. (2016). Retrieved from https://itunes.apple.com/us/app/playbook.dance/id572038933?mt=8 
SongMark choreography. (2018). Retrieved from http://www.songmark.co/ 
ADDITIONAL SOURCES 
WEBSITES 
Balingit, M. (2016). Teachers are using theater and dance to teach math-and itÕs working. Washington Post. Retrieved from https://www.washingtonpost.com/local/education/teachers-are-using-theater-and.dance-to-teach-math--and-its-working/2016/02/22/61f8dc0c-d68b-11e5-b195.2e29a4e13425_story.html?utm_term=.566fa866e83b 
Cooper, J. (2016). Integrating Music, drama, and dance helps children explore and learn. National Association for the Education of Young Children. Retrieved from https://www.naeyc.org/resources/pubs/tyc/apr2016/integrating-music-drama-and-dance-helps-children 
Primary source set: Performing arts. (2011). Retrieved from http://library.mtsu.edu/tps/sets/Primary_Source_Set--Music_and_Dance.pdf 
Robinson K., Aronicahttps L. (2018, March 21). Why dance is just as important as math in school. TED Ideas. Retrieved from http://ideas.ted.com/why-dance-is-just-as-important-as-math-in-school/ 
Tennessee standards for dance and theatre. (2017). Retrieved from https://www.tn.gov/education/instruction/academic-standards/arts-education.html 
The importance of fine arts education. (2010). Retrieved from http://www.katyisd.org/dept/finearts/Pages/The-Importance-of-Fine-Arts-Education-.aspx 
Visual and performing arts framework. (2012). Retrieved from https://www.cde.ca.gov/ci/cr/cf/documents/vpaframewrk.pdf 

BOOKS AVAILABLE AT DALTON STATE COLLEGE LIBRARY 
Ashley, L. (Ed.). (2012). Dancing with difference: Culturally diverse dances in education. Retrieved from https://ebookcentral.proquest.com 
Brady, M., & Gleason, P. T. (1994). Artstarts: Drama, music, movement, puppetry, and storytelling activities. Englewood, CO: Libraries Unlimited. 
Carleton, J. P. (2012). Story drama in the special needs classroom: Step-by-step lesson plans for teaching through dramatic play. Philadelphia, PA: Jessica Kingsley Publishers. 
Donbavand, T. (2009). Making a drama out of a crisis: Improving classroom behavior through drama techniques and exercises. Retrieved from https://ebookcentral.proquest.com 
McFarlane, P. (2012). Creative drama for emotional support: Activities and exercises for use in the classroom. London, UK: Jessica Kingsley Publishers. 
Taylor, P. (2000). The drama classroom: Action, reflection, transformation (1st ed.). Abingdon, UK: Routledge. 
Wallis, C. (2004). Drama to go book 1: Teacher answer book. Retrieved from http://fliphtml5.com/vprx/hspi/basic/51-78 

VIDOES 
Arts integration: The elements of dance [Video file]. (2014). Retrieved from https://www.teachingchannel.org/videos/integrating-dance-into-lessons 
Education through drama and theater [Video file]. (2015). Retrieved from https://youtu.be/vOLhlQhFFKo First graders learn math concepts through dance [Video file]. (2012). Retrieved from https://www.youtube.com/watch?v=-jwG5NaieWE 
How I teach math & dance at the same time [Video file]. (2014). Retrieved from https://www.youtube.com/watch?v=i6qB2pTSRm8 
Integrating drama across curriculum [Video file]. (2013). Retrieved from https://youtu.be/GjGE-yTLmD0 Music and dance drive academic achievement [Video file]. (2010). Retrieved from https://www.youtube.com/watch?v=ISTUqQeXPcM 
Step dance, chorus and other ensembles-the power of music: P-5 teaching inspired by El Sistema [Video 
file]. (2014). Retrieved from https://fod.infobase.com/PortalPlaylists.aspx?wID=103290&xtid=113516 Teaching science through dance [Video file]. (2012). Retrieved from https://www.youtube.com/watch?v=EDpMgEDB814 
The arts in action: Dance and drama improving student achievement [Video file]. (2014). Retrieved from https://www.youtube.com/watch?v=uOZe33fFOSs 

SCHOLARLY JOURNAL ARTICALS 
Dunkin, A. (2004). Gliding glissade not grand jete: Elementary classroom teachers teaching dance. Arts Education Policy Review, 105(3), 23-29. 
Friedmann, D. (2012). Acting up: Five elementary teachers explore classroom management through dramatic play (Order No. 3493854). Retrieved from ProQuest Database. 
Kaaland-Wells, C. (1993). Classroom teachers' perception and use of creative drama (Order No. 9418311). Retrieved from ProQuest Database.   
Kalyn, B. (2014). Pedagogical considerations: Sharing supportive ideas for dance education. Physical & Health Education Journal, 80(2), 30-32. 
Kiley, J. (2010). Dance: A risk worth taking. Physical & Health Education Journal, 76(2), 16-18. 
Rydeen, F., & Reedy, P. (2008). Creating, performing & communicating through dance. Leadership, 38(2), 22-25, 37. 

CHAPTER SEVEN P.E./MOVEMENT 


SELECTED READING 
Multiple physical and mental health benefits can be attained when children participate in the recommended 60 min per day of moderate-to vigorous-intensity physical activity (Janssen & LeBlanc, 2010; Okely et al., 2012). Despite these benefits, population based-studies have reported that over 50% of children in Australia and internationally are not meeting recommendations (Active Healthy Kids Canada, 2013; Australian Health Survey, 2012; Griffiths et al., 2013; Troiano et al., 2008). Schools are considered ideal settings for 
the promotion ofchildrenÕs physical activity. There are multiple opportunities for children to bephysically 
active over the course of the school week, including during break times, sport, Physical Education class and active travel to and from school. Studies (Ridgers, Stratton, Fairclough, & Twisk, 2007; Sallis et al., 1997) 
have shown interventions targetingthesediscrete periods maybe effective in increasingchildrenÕsphysical 
activity levels with the potential to contribute to up to 50% of the physical activity required to meet physical activity guidelines (Fairclough, Beighle, Erwin, & Ridgers, 2012). However, with limited time available during these discrete periods, additional opportunities may be required in order for children to achieve the recommended levels of physical activity. Classroom-based physical activity provides another way for children to be active at school. This involves classroom teachers incorporating physical activity into class time through either integrating physical activity into lessons (physically active lessons), or adding short bursts of physical activity, either with curriculum content (curriculum focused active breaks) or without (active breaks). 
There is increasing interest from researchers and education professionals about the potential for classroom-based physical activity to positively impact academic-related outcomes, including classroom behavior, cognitive function and academic achievement. While some teachers express concern that classroom-based physical activity may have an adverse effect on on-task classroom behavior (McMullen, Kulinna, & Cothran, 2014), emerging evidence from systematic reviews and meta-analyses suggest that overall physical activity may have a small positive effect on on-task classroom behavior (Fedewa & Ahn, 2011; Haapala, 2012; Lees & Hopkins, 2013; Sibley & Etnier; 2003; Singh et al., 2012; Taras, 2005; Trudeau & Shephard, 2008). There is less evidence on classroom-based physical activity. 
Narrative reviews (Bartholomew & Jowers, 2011; Donnelly & Lambourne, 2011; Mahar, 2011), one systematic review (Norris et al., 2015) and two meta-analyses (Erwin, Fedewa, Beighle, & Ahn, 2012; Owen et al., 2016) have explored the impact of classroom-based physical activity interventions on academic-related outcomes. However, these were narrow in scope, included few studies, and combined findings among primary and secondary school students, which may be problematic due to the difference in education settings. 
A systematic review of 11 studies concluded that physically active lessons may have a positive effect, or no effect on academic-related outcomes (Norris et al., 2015). However, that study did not consider other forms of classroom-based physical activity (e.g. active breaks), combined findings among primary and secondary school students, and did not include a meta-analysis (Norris et al., 2015). 
A meta-analysis of four intervention studies found that classroom-based physical activity had a positive effect on academic-related outcomes (M = 0.67; 95% CI: 0.26, 1.09) (Erwin, Fedewa, Beighle, & Ahn, 2012). Similar results were reported in a meta-analysis of 24 intervention studies investigating the association between different types of physical activity (e.g., during recess or lunch vs. active breaks vs. physically active lessons) and school engagement (behavior at home and at school, and emotions, e.g. lesson enjoyment) (Owen, et al., 2016). In that meta-analysis, overall results showed physical activity had a significant positive effect on school engagement (d = 0.28;95% CI: 0.12, 0.46) (Owen et al., 2016). When broken down into type of physical activity, active breaks (n = 4 studies) appeared to be the most effective type of intervention for improving school engagement (d = 0.55; 95% CI: 0.02, 1.06), compared with recess or lunch time physical activity (n = 3 studies; d = 0.26; 95% CI: -0.19, 0.73) and physically active lessons (n = 5 studies; d = 0.22; 95% CI: -0.21, 0.66) (Owen, et. al., 2016). However, results from those meta-analyses are limited by the small number of included studies, the narrow range of potential academic-related outcomes assessed, the combination of findings among primary and secondary school students, and their recency (Erwin, Fedewa, Beighle, & Ahn, 2012; Owen et al., 2016). 
This chapter aims to expand on findings from these reviews by conducting a systematic review and meta-analyses of the evidence of effect of classroom-based physical activity interventions (active breaks, curriculum-focused active breaks and physically active lessons) on a broad range of academic-related outcomes (classroom behavior, cognitive function and academic achievement), specifically among primary school-aged children. Asecondaryaimis to examine the effectofthese interventions onchildrenÕs physical activity levels. 
Methods 
Definitions 
While there are no set definitions for classroom-based physical activity, the following definitions are provided in order to maintain consistency and clarity throughout the remainder of this systematic review. 
Classroom-Based Physical Activity: physical activity carried out during regular class time and can occur either inside or outside the classroom (e.g. hallway, playground), and is distinct from school recess/lunch break times. Classroom-based physical activity can take three forms: 
. 
Active breaks: short bouts of physical activity performed as a break from academic instruction (Ma, Le Mare, & Gurd, 2014). 

. 
Curriculum-focused active breaks: short bouts of physical activity that include curriculum content (Mahar et al., 2006; Schmidt, Benzing, & Kamer, 2016). 

. 
Physically active lessons: the integration of physical activity into lessons in key learning areas other than physical education (e.g. mathematics) (Riley, Lubans, Holmes, & Morgan, 2016; Riley, Lubans, Morgan, & Young, 2015). 

Academic-Related Outcomes: overarching term to encompass factors associated with academic performance at school. These can be grouped into three main categories: 

. 
Classroom behavior: Observed behaviors that may promote or interfere with learning in the classroom, including on-task behavior (e.g. concentrating on tasks assigned by the teacher), and off-task behavior (e.g. not concentrating on tasks assigned by the teacher) (Rasberry et al., 2011). 

. 
Cognitive function: Mental process (e.g. executive function) that may influence academic performance (Rasberry et al., 2011). 

. 
Academic achievement: A childÕs performance on school-related tasks; often reported via classroom grades, national standardized tests or progress monitoring tools (Rasberry et al., 2011), as well as self-reported perceived academic competence (Vazou & Smiley-Oyen, 2014). 


Registration and Protocol 
This study followed the Preferred Reporting Items for Systematic Reviews and Meta-Analyses (PRISMA) recommendations for systematic review reporting and was registered with the International Prospective Register of Systematic Reviews (PROSPERO) (record #CRD42016027294). 
Search Strategy 
Studies were identified through a systematic search of four electronic databases (PubMed, ERIC, SPORTDiscus and PsycINFO), first conducted in January 2016, and updated in January 2017 by one author (AW). The search strategy consisted of four elements (see Table 7.1). The search was limited to peer-
reviewed articles published in English in all available years. ÔGreyÕ literature, including the reference lists from the websites of two organizations (ÒActive AcademicsÓ and ÒActive Living ResearchÓ) involved in childrenÕs physical activity research were also searched. 
Table 7.1. Article Search Terms and Databases Searched 

Inclusion Criteria 
A predetermined set of inclusion criteria were used to select papers for this systematic review. Each study had to meet the following criteria: 
1. 
Intervention study design; 

2. 
Investigated associations between classroom-based physical activity and at least one academic-related outcome. Interventions involving strategies in addition to classroom-based physical activity were excluded (to enable the effects of classroom-based physical activity to be isolated); 

3. 
Study population included primary school-aged children (5-12 years); 

4. 
Presented original data; 

5. 
Did not focus specifically on special populations (e.g. overweight children). 



Study Selection 
The search yielded 7729 citations from electronic database records, and 17 from ÔgreyÕ literature (Figure 
7.1). After removing duplicates (n = 500), the titles and/or abstracts of 7246 unique publications were screened by one author (AW). A total of 101 publications were identified as potentially relevant according to the inclusion criteria. Full texts of 98 of these 101 articles were obtained and reviewed independently by two authors to determine eligibility (AW, KB). Two full texts were conference abstracts only, and one full-text was unable to be retrieved despite extensive librarian-assisted enquiries and emails directly to the contact author. Of the 98 full-text articles, a total of 59 were excluded as not meeting inclusion criteria. Disagreements between the two reviewers were resolved through discussion with all authors. Reference lists of included articles were also examined however no additional studies were identified. Thirty-nine unique citations satisfied the eligibility criteria and were included in this systematic review. 
Data Extraction 
Paper characteristics including country of study, study design, participant characteristics, intervention characteristics, academic-related outcome measures, physical activity measures, and results were extracted by one author (AW). Interventions were then categorized as active break, curriculum focused active break, or physically active lesson intervention. 
Methodological Quality 
Two authors (AW, KB) independently assessed the methodological quality of the included studies using the Effective Public Health Practice Project (EPHPP) tool (Quality Assessment Tool for Quantitative Studies, 2008). This six-component rating scale for interventions assesses (1) selection bias; (2) study design; (3) confounders; (4) blinding; (5) data collection methods; and (6) withdrawals and drop outs. Each component was rated on a three-point scale as either strong, moderate or weak using the toolÕs defined criteria. Based on these ratings, an overall methodological quality score was given; either strong (no weak component ratings); moderate (one weak component rating); or weak (more than one weak component 
rating), following the toolÕs accompanying instructions. Where disagreements existed, deliberation 
occurred until a consensus was reached. 
Meta-Analyses 
Meta-analyses were conducted where there were at least three studies investigating the same broad outcome, i.e. classroom behavior, cognitive function, or academic achievement. Due to heterogeneity across study designs, four inclusion studies were required to have a separate comparison group (i.e. RCT or quasi experimental with control group). Studies that used a within subject or cross over study design were therefore excluded from meta-analysis. 
To avoid duplication of studies under a single outcome, where studies reported intervention effects on multiple measures for an outcome (this happened only for cognitive functions) (Beck et al., 2016; De Greeff et al., 2016), a decision was made to include outcomes relating to executive functions, over memory. Executive functions, inhibition in particular, have been shown to be consistently related to academic achievement (Best, Miller, & Naglieri, 2011) and therefore were considered salient to teachers. Thus, where inhibition and memory were reported, only inhibition was included in the meta-analysis; where executive functions and short-term memory were reported, only executive functions were included in the meta-analysis. Typically, higher scores were reflective of better academic-related outcomes and lower scores reflected better academic-related outcomes when these scores were reversed. 
As academic achievement tools varied widely in quality, only studies using national standardized tests or progress monitoring tools were included in the meta-analyses. Further, intervention effects on mathematics were used when studies reported multiple subject assessments, as math was the most commonly reported outcome. Of the 39 studies included in this systematic review, 16 were included in meta-analyses. Reasons for exclusion were: insufficient data for calculating effect sizes and authors did not respond to email requests for additional data (n = 6), using a within subject or cross-over study design (n = 9), not including a separate comparison group (n = 2), insufficient studies investigating an outcome (n = 4), or only reporting results separately for subgroups (e.g. BMI categories) (n = 2). 
Analysis 
Meta-analyses were conducted using Review Manager 5.3. The wide variation in interventions and academic-related outcomes employed in the different studies warranted use of a random effects model. 
Effect sizes (standardized mean difference) were computed as the difference between treatment and control means. 
Results 
Of the 39 studies identified, 19 examined the effect of active breaks, seven examined curriculum-focused active breaks, and thirteen examined physically active lessons on academic-related outcomes. The majority of studies (n = 27) were published in or after 2014, and none before 2006. Most (n = 18) were conducted in the USA, seven in the Netherlands, four in Australia, three in Canada, two in Scotland, and one each in South Africa, UK, Greece, Denmark, and Switzerland. Sample sizes ranged from 14 to over 4500 participants, with sample sizes <300 in the majority of studies (n = 28). Intervention periods spanned from single lessons to 3-year duration, with most lasting no longer than nine weeks (n = 23). 
Intervention Content 
There was considerable variation across studies in intervention content. While most (12 out of 19) active break interventions featured basic aerobic movements that students could be performed in their classroom 
(e.g. 
jumping jacks), and required no set-up or equipment, others were performed outside the classroom 

(e.g. 
sports field), and/or required additional equipment (e.g. markers, skipping ropes, balls, exercise bands, dance videos, or specialized stacking cups). One study utilized both cognitively engaging active breaks (i.e. physical activity combined with cognitive demand) and active breaks to explore separate and combined effects of physical activity and cognitive engagement on cognitive function. The target frequency, duration and physical activity intensity of the breaks varied, ranging from 4 min of vigorous-intensity physical activity weekly to 20 min of moderate intensity physical activity done twice per day. 


There was more consistency in content across curriculum-focused active breaks, compared with the active breaks without curriculum content. All curriculum-focused active breaks featured physical activity integrated into a combination of key learning areas, including mathematics, language, science and/or social studies, and aimed to reinforce previously taught lesson content. Further, most (5 out of 7) required daily participation in 10 to 20 min of physical activity. When specified, participation was required at a moderate-or moderate-to vigorous-physical activity intensity, but intensity was not specified in the majority (5 out of 
7)of these studies. 
While curriculum-focused active breaks aimed to reinforce previously taught lesson content, physically active lessons were used to teach new lesson content. These lessons predominately incorporated physical activity into mathematics and/or language lessons, but some also incorporated science and/or social studies. Lessons ranged in duration from 30 to 60 min with most (8 out of 13) requiring participation three times per week. Other physically active lessons were described as single lessons as part of pilot interventions or stipulated physical activity time per week, rather than number of lessons per week. 
Intervention Fidelity 
Intervention fidelity was reported in twelve studies. For the three active break interventions delivered by teachers, various measures of fidelity were used, however, no study clearly reported compliance with implementing active breaks daily or the number of active break sessions conducted. Active break interventions delivered by research staff reported high fidelity, showing most children achieved the required physical activity intensity, or at least 50% of each intervention session was spent at the required intensity. 
For physically active lesson interventions, teacher reports showed they delivered lessons either as intended or for at least 50% of the required minutes per week. Similar to active break studies, when delivered by 
research staff, at least 60% of intervention lessons were spent at the required physical activity intensity. No curriculum focused active break study reported fidelity. 
Methodological Quality 
Of the 39 identified studies, most (36 out of 39) received a moderate, or weak quality rating score. Three received a strong quality rating score. Low to moderate quality score ratings were mostly attributable to not reporting or controlling for relevant demographic confounders, not reporting blinding of participants and researchers, and not reporting participant attrition. Further, for many studies, authors did not report the rate of participant or school participation. 
Academic-Related Outcomes: Classroom Behavior 
Studies assessed the effect of participation in these programs on academic-related outcomes both immediately following participation in a session (acute) and after a longer exposure (chronic; e.g. pre-and post-intervention periods spanning up to 8 months). Regardless of type of classroom-based physical activity, the majority of studies (10 out of 12) showed participation in these programs had an acute effect on improving on-task classroom behavior and reducing off-task behavior. However, evidence in the few studies with longer term follow-up (2 out of 2 studies) suggest that this improvement may dissipate over time, with no difference between groups when chronic intervention effects on reported behavior incidents were assessed. Due to few studies investigating chronic effects of classroom-based physical activity on on-task and off task classroom behavior (<5) it was not possible to separate acute and chronic effects in the meta-analysis. Results from the four included studies show classroom-based physical activity had a positive effect on improving on-task behavior and reducing off-task behavior (standardized mean difference = 0.60 (95% CI: 0.20,1.00)). (See Figure7.2.) 

Academic-Related Outcomes: Cognitive Function 
Studies also assessed acute and chronic effects of classroom-based physical activity on a range of cognitive functions. Results showed active breaks had an acute positive effect on selective attention (3 out of 4 studies). No acute effect was reported for sustained attention, information processing or focused attention, processing speed and accuracy, and no chronic effect was reported for planning, attention, simultaneous or successive cognitive processes or executive function. Acute intervention effects on executive function were inconsistent, with no difference between groups reported in one study, while another reported improvement in executive function but only for those receiving the intervention in the second week of delivery. Results were also inconsistent for chronic intervention effects on fluid intelligence, with one study reporting a significant improvement after 3 months, while another reported no difference between groups after one year. Due to few studies reporting chronic effects of participation (<5) results for acute and chronic studies were combined in the meta-analysis (5 studies). Results from the meta-analysis indicate classroom-based physical activity had no effect on cognitive function (standardized mean difference = 0.33 (95% CI: .0.11,0.77). (See Figure 7.3.) 

Academic-Related Outcomes: Academic Achievement 
Studies assessed intervention effects on academic achievement using a range of academic assessment tools, including standardized tests, progress monitoring tools, grades and content recall quizzes. Report effects on academic achievement varied by intervention duration and the type of assessment tool used. Interventions of shorter duration tended to show improvement in academic achievement if a progress monitoring tool was used, but not if a national standardized test was used. Seven out of 8 studies using a progress monitoring tool reported significant improvement in academic achievement following intervention periods ranging from 4 weeks to 1-year. In contrast, most (4 out of 7) studies indicated no difference between groups following intervention periods less than 1-year when national standardized tests were used as the outcome measure. However, standardized test scores significantly improved following a 1-year and 3-year physically active lesson intervention. These results were confirmed in the meta-analysis. When progress monitoring tools were used (4 studies) as the outcome measure, academic-related outcomes generally showed improvement (standardized mean difference = 1.03 (95% CI: -0.22,1.84)). However, when measured using a national standardized test (6 studies), academic-related outcomes generally showed no improvement (standardized mean difference = -1.13(95% CI: -0.72,0.46)). (See Figure 7.4.) 
In addition to standardized tests and progress monitoring tools, a small number of studies (not included in the meta-analysis) measured academic achievement via grades, content recall quizzes and self-reported academic competence. Results were inconsistent. One study reported no difference between groups for grades across eight subjects (total score) following a 20-week active break program. Another reported a greater proportion of students in the control group showed improvement in grades for math and reading, compared with an active break intervention group. Other studies assessed academic achievement via content recall quizzes and perceptions of academic competence, with no difference between groups in math and social studies scores following participation in single lessons lasting between 10 and 30 min. Another study reported self-reported perceptions of academic competence improved during physically active lessons. 

Dose Response Relationship 
Four studies aimed to explore the optimal dose of active break (i.e. amount of physical activity required to confer academic benefits) required to provide maximum effects on academic-related outcomes, by manipulating intensity, duration, and frequency of active break sessions. Howie and colleagues (Howie, Beets, & Pate, 2014; Howie, Schatz, & Pate, 2015) compared 5-, 10-and 20-min active breaks with a 10.min no break condition. Results showed on-task classroom behavior significantly improved after the 10.min active break condition (Howie, Beets, & Pate, 2014) and math scores were highest after the 10-min (ES = 0.24) and 20-min (ES = 0.27) active break conditions (Howie, Schatz, & Pate, 2015). Janssen et al. (2014) compared selective attention scores across 15 min of each of the following four conditions: no break (continued with school work), passive break (teacher read story), moderate-intensity active break (jogging, passing, dribbling), and vigorous-intensity active break (running, jumping, skipping). Results showed that selective attention scores improved most after the moderate-intensity active break (Janssen et al., 2014). Altenburg and colleagues (2016) compared acute effects of different frequencies (one per day vs. twice per day) of 20 min moderate-intensity active breaks. Results showed significantly better selective attention scores for children who received the twice per day frequency (Altenburg, Chinapaw, & Singh, 2016). 
Physical Activity Outcomes 
Eleven studies examined the effect of classroom-based physical activity interventions on childrenÕs physical activity levels using a range of measures, including questionnaire direct observation, pedometer, and accelerometer. Across most (10 out of 11) classroom-based physical activity interventions, small increases in physical activity were reported. Across studies there was a 2% to 16% increase in moderate-to vigorous-intensity physical activity during intervention lessons, and 2% to 12% increase in school day moderate-to vigorous-intensity physical activity. However, results from 3 studies included in meta-analysis indicate classroom-based physical activity did not affect physical activity (standardized mean difference = 0.40 (95% CI: -0.15,0.95). 
Discussion 
A systematic search of the literature found 39 studies assessing the effect of classroom-based physical activity on academic-related outcomes, including classroom behavior, cognitive function and academic achievement. In the majority of studies, academic-related outcomes improved following participation in classroom-based physical activity programs. These findings are generally consistent with earlier reviews finding that overall physical activity level was either positively associated or was not associated with academic-related outcomes. In addition, the interventions included in the current review generally resulted in more physical activity. 
The finding that classroom-based physical activity improves on-task or reduces off-task classroom behavior immediately following participation in intervention sessions is consistent with previous reviews of school-based physical activity. For example, systematic reviews of the effect of physical activity during the school break time on academic-related outcomes showed positive associations between participation in physical activity before class (e.g. during recess/snack time) and on-task classroom behavior in subsequent lessons (Trudeau & Shephard, 2008; Rasberry et al., 2011). Therefore, breaking up lesson time with physical activity offers a promising strategy to improve on-task behavior. Further, physically active lessons may provide a strategy to engage students in lesson content, which may lead to improved on-task classroom behavior. However, this assumption is purely speculative and further research is needed to confirm this. One study reported a non-significant increase in on-task classroom behavior after intervention sessions, compared with control (Grieco, Jowers, & Bartholomew, 2009). A possible reason for this finding may be that the sample size in that study (n = 97) may not have been large enough to detect a significant improvement. Few studies (n = 3) reported that classroom-based physical activity had no effect on classroom behavior. The majority of these studies (2 out of 3) reported that, while behavior incidents and off-task behavior increased in both the intervention and control groups, the increase was greater in the control group, compared with the intervention group (Hunter et al., 2014; Wilson et al., 2016;). These findings may encourage teachers to consider implementing classroom-based physical activity programs by alleviating concerns about reducing on-task behavior due to the disruption to the classroom routine. 
While classroom-based physical activity showed relatively consistent positive associations with classroom behavior, effects on cognitive function were inconsistent. A possible explanation for this finding may relate to the variability in the quality of measures used. Overall results showed studies that reported improvements in cognitive function used measures with moderate to high levels of reliability and validity. In contrast, studies reporting no improvement in cognitive function mainly used measures with lower levels of reliability and validity. It may be important for future studies to use tests of cognitive function with established validity and reliability. 
A further possible explanation for inconsistent effects on cognitive function may relate to the level of cognitive engagement inherent in each type of classroom-based physical activity. It has been suggested that cognitively engaging physical activity (i.e. physical activity combined with cognitive demands) may enhance cognitive function to a greater degree than non-cognitively engaging physical activity (e.g. repetitive exercise). As curriculum-focused active breaks and physically active lessons can be considered cognitively engaging physical activity, it could be hypothesized that these types of classroom-based physical activity would lead to greater improvements in cognitive function, compared with active breaks that involve no cognitive content. While the majority of physically active lesson and curriculum focused active break interventions (2 out of 3 studies) and only half of active break interventions (5 out of 10 studies) led to improvements in cognitive function, there were too few cognitively engaging interventions included in the review to draw a definitive conclusion. The one study that compared cognitively engaging and non-cognitively engaging active breaks, showed an impact on cognitive outcomes for the cognitively engaging breaks group only, lending support to this hypothesis. 
Although not explicitly stated, many studies which do not purport to involve cognitively engaging physical activity involve some activities which are likely to confer cognitive engagement e.g. hopping sequences to music, and coordinative exercises. Some of these studies report positive and some null findings, yet it is difficult to ascertain the proportion of physical activity children were exposed to that was cognitively engaging. Future studies are encouraged to separate the effects of cognitively engaging and non-cognitively engaging physical activity on cognitive functions. 
In addition to the cognitive test used, results may be dependent on the type of cognitive function assessed. For example, classroom-based physical activity appeared to have a particularly beneficial effect on selective attention, compared with other components of cognitive function, including sustained attention, fluid intelligence, information processing speed, and executive function. However, a recent systematic review concluded that there is insufficient evidence to conclude what specific cognitive functions are most affected by physical activity. Exercise-induced arousal may provide a further explanation for inconsistency in findings. This theory suggests that the heightened level of arousal during physical activity facilitates cognitive function and that this effect may be moderated by physical activity intensity. 
However, while the majority of included studies reported a target physical activity intensity, few measured physical activity intensity during interventions precluding conclusions regarding the role of physical activity intensity on cognitive function. Thus, the favorable effect of physical activity on selective attention indicated in this review requires further research for confirmation. Nonetheless, should improvements in selective attention occur, such as the ability to ignore distractions this may be of particular interest to teachers and may provide motivation to incorporate physical activity into their classroom routine. 
In addition to classroom behavior and cognitive function, classroom-based physical activity may also have a positive effect on academic achievement. However, effects on academic achievement may be dependent on intervention duration and the type of assessment tool used to measure academic achievement. In the current review it appeared that interventions of shorter duration were more likely to show an improvement in academic achievement if a progress monitoring tool was used, rather than a national standardized test. This may be because curriculum-based measures are sensitive to small changes in academic achievement, and can be administered frequently (e.g. weekly), while standardized tests are usually designed to be administered less frequently (e.g. yearly) and are not sensitive to short-term progress. Therefore, progress monitoring tools may be a more suitable choice to determine intervention effects on academic achievement in the short-term. This finding has important implications for future research, indicating it may be important to consider intervention duration when selecting the measure of academic achievement. Therefore, future intervention studies may consider using a progress monitoring tool for intervention periods less than 1 year, and standardized tests for intervention periods longer than 1 year if academic achievement is the outcome of interest. 
Other studies investigated the impact of different doses of classroom-based physical activity on academic-related outcomes. However, results are based on few (n = 4) heterogeneous studies which considered a limited range of potential physical activity doses. Thus, further research is needed to be able to draw conclusions regarding the minimal dose of active break required to impact academic-related outcomes. Several studies aimed to explore the effect of classroom-based physical activity on childrenÕs physical activity levels. Results from the meta-analysis showed classroom-based physical activity did not affect physical activity levels. However, as only three of the 11 identified studies could be included in the meta-analysis these results should be interpreted with caution, and further research is warranted. Findings from the systematic review consistently revealed small increases in physical activity in children participating in the intervention, compared with students in the comparison group. 
These findings are in line with results from another review reporting positive associations between classroom-based physical activityinterventions and childrenÕs physical activitylevels. While promising, it 
is possible compensation for this activity occurs outside of school. However, with limited information available, it is difficult to make strong conclusions on this. Further, it can be difficult to implement physical activity interventions in schools, often due to a lack of time associated with competing curriculum demands. However, classroom-based physical activity is unique from other forms of school-based physical activity 
(e.g. Physical Education class and school sport) in that it does not compete for instructional time (physically active lessons and curriculum-focused active breaks) or requires only minimal time commitment (active breaks). Thus, classroom-based physical activity may be a potentially appealing option for schools as it offers a time-efficient strategy to promote physical activity. 
Limitations 
The considerable variation between studies in study designs, intervention content and outcome assessment tools make it difficult to draw definitive conclusions, as evidenced by the small proportion of studies that could be included in meta-analyses. For studies that assessed intervention effects on physical activity, the majority compared physical activity levels during the classroom-based physical activity session, with a traditional seated lesson, or assessed intervention effects on school day physical activity levels only. Therefore, it is unclear if the increase in physical activity during these sessions is compensated for by a reduction in physical activity at other times of the day. However, as intervention effects on improving on-task, reducing off-task classroom behavior and cognitive function appear to be primarily acute, this may not be a problem for these outcomes. In addition, few studies used an objective measure of physical activity intensity. Thus, future studies using objective measures of physical activity are required to determine intervention effects on overall moderate-to-vigorous-intensity physical activity, and to determine intervention fidelity (i.e. if the required physical activity intensity is met) within the sessions. Lastly, given that the majority of included studies reported significant improvements in academic-related outcomes, it is possible publication bias may have impacted the lack of published null associations. 
Conclusion 
Classroom-based physical activity interventions may provide a practical, low-cost, and effective strategy to increase academic-related outcomes, particularly acute positive effects on improving on-task and reducing off-task classroom behavior and selective attention. Classroom-based physical activity could also 
have the potential to increase childrenÕs physical activity levels, however further research is needed to 
confirm this. Findings from this systematic review should be interpreted with caution given the high number of included studies of low methodological quality, suggesting there is room for improvement in classroom-based physical activity intervention study designs and reporting. This review has identified a number of areas for further research in order to increase understanding of the effect of classroom-based physical activity on academic and physical activity outcomes. These include the need for future studies to use objective measures of physical activity, and to consider intervention duration when selecting a measure of academic achievement. In addition, future studies should explore the effect of classroom-based physical activity interventions on specific cognitive outcomes, as well as the impact of different types of physical activity (aerobic versus anaerobic versus resistance training and cognitively engaging vs. non-cognitively engaging physical activity) on academic-related outcomes. Further, it is not clear if improvements in academic-related outcomes are a result of the physical activity or a result of the break from academic instruction, therefore future research is encouraged to add an attention control group. Lastly, it is recommended future studies use a standardized measure of cognitive function with established reliability and validity to be able to make comparisons across studies. 
REFERENCES 
Active healthy kids Canada. Are we driving our kids to unhealthy habits? (2013). Retrieved from http://hepac.ca/active-healthy-kids-2013/ 
Ahamed, Y., MacDonald, H., Reed, K., Naylor, P. J., Liu-Ambrose, T., & Mckay, H. (2007). School-based physical activity does not compromise children's academic performance. Medicine and Science in Sports and Exercise, 39(2), 371-376. 
Altenburg, T. M., Chinapaw, M. J., & Singh, A. S. (2016). Effects of one versus two bouts of moderate intensity physical activity on selective attention during a school morning in Dutch primary schoolchildren: A randomized controlled trial. Journal of Science and Medicine in Sport, 19(10), 820.824. 
Australian health survey: Physical activity. (2012). Retrieved from http://www.abs.gov.au/ausstats/abs@.nsf/Latestproducts/462FBA87B642FCA4CA257BAC0015F3CE?o pendocument 
Barnard, M., Van Deventer, K. J., & Oswald, M. M. (2014). The role of active teaching programmes in academic skills enhancement of grade 2 learners in the Stellenbosch region. South African Journal for Research in Sport, Physical Education and Recreation, 36(2), 1-14. 
Bartholomew, J. B., & Jowers, E. M. (2011). Physically active academic lessons in elementary children. Preventive Medicine, 52(Suppl), S51-S54. Retrieved from http://doi.org/10.1016/j.ypmed.2011.01.017 
Beck, M. M., Lind, R. R., Geertsen, S. S., Ritz, C., Lundbye-Jensen, J., & Wienecke, J. (2016). Motor-enriched learning activities can improve mathematical performance in preadolescent children. Frontiers in Human Neuroscience, 10, 645. Retrieved from http://doi.org/10.3389/fnhum.2016.00645 
Best, J. R., Miller, P. H., & Naglieri, J. A. (2011). Relations between executive function and academic achievement from ages 5 to 17 in a large, representative national sample. Learning and Individual Differences, 21(4), 327-336. Retrieved from http://doi.org/10.1016/j.lindif.2011.01.007 
De Greeff, J. W., Hartman, E., Mullender-Wijnsma, M. J., Bosker, R. J., Doolaard, S., & Visscher, C. (2016). Long-term effects of physically active academic lessons on physical fitness and executive functions in primary school children. Health Education Research, 31(2), 185-194. 
Donnelly, J. E., & Lambourne, K. (2011). Classroom-based physical activity, cognition, and academic achievement. Preventive Medicine, 52, S36-S42. 
Erwin, H., Fedewa, A., & Ahn, S. (2013). Student academic performance outcomes of a classroom physical activity intervention: A pilot study. International Electronic Journal of Elementary Education, 4(3), 473. 
Erwin, H., Fedewa, A., Beighle, A., & Ahn, S. (2012). A quantitative review of physical activity, health, and learning outcomes associated with classroom-based physical activity interventions. Journal of Applied School Psychology, 28(1), 14-36. 
Fairclough, S. J., Beighle, A., Erwin, H., & Ridgers, N. D. (2012). School day segmented physical activity patterns of high and low active children. BMC Public Health, 12(1), 406. 
Fedewa, A. L., Ahn, S., Erwin, H., & Davis, M. C. (2015). A randomized controlled design investigating the effects of classroom-based physical activity on childrenÕs fluid intelligence and achievement. School Psychology International, 36(2), 135-153. 
Grieco, L. A., Jowers, E. M., Errisuriz, V. L., & Bartholomew, J. B. (2016). Physically active vs sedentary academic lessons: A dose response study for elementary student time on task. Preventive Medicine, 89, 98-103. Retrieved from http://doi.org/10.1016/j.ypmed.2016.05.021 
Griffiths, L. J., Cortina-Borja, M., Sera, F., Pouliou, T., Geraci, M., Rich, C., ... & Jebb, S. A. (2013). How active are our children? Findings from the millennium cohort study. BMJ open, 3(8), e002893. 
Haapala, E. (2012). Physical activity, academic performance and cognition in children and adolescents. A systematic review. Baltic Journal of Health and Physical Activity, 4(1), 53. 
Howie, E. K., Beets, M. W., & Pate, R. R. (2014). Acute classroom exercise breaks improve on-task behavior in 4th and 5th grade students: a dose response. Mental Health and Physical Activity, 7(2), 65-71. 
Howie, E. K., Schatz, J., & Pate, R. R. (2015). Acute effects of classroom exercise breaks on executive function and math performance: A dose response study. Research Quarterly for Exercise and Sport, 86(3), 217-224. 
Hunter, L., Abbott, R., Macdonald, D., Ziviani, J., & Cuskelly, M. (2014). Active kids active minds: A physical activity intervention to promote learning? Asia-Pacific Journal of Health, Sport and Physical Education, 5(2), 117-131. 
Janssen, M., Chinapaw, M. J. M., Rauh, S. P., Toussaint, H. M., Van Mechelen, W., & Verhagen, E. A. 
L. M. (2014). A short physical activity break from cognitive tasks increases selective attention in primary school children aged 10-11. Mental Health and Physical Activity, 7(3), 129-134. 
Lees, C., & Hopkins, J. (2013). Effect of aerobic exercise on cognition, academic achievement, and psychosocial function in children: A systematic review of randomized control trials. Preventing Chronic Disease, 10. 
Ma, J. K., Le Mare, L., & Gurd, B. J. (2014). Four minutes of in-class high-intensity interval activity improves selective attention in 9-to 11-year olds. Applied Physiology, Nutrition, and Metabolism, 40(3), 238-244. 
Mahar, M. T. (2011). Impact of short bouts of physical activity on attention-to-task in elementary school children. Preventive Medicine, 52, S60-S64. 
Mahar, M. T., Murphy, S. K., Rowe, D. A., Golden, J., Shields, A. T., & Raedeke, T. D. (2006). Effects of a classroom-based program on physical activity and on-task behavior. Medicine and Science in Sports and Exercise, 38(12), 2086. 
McCrady-Spitzer, S. K., Manohar, C. U., Koepp, G. A., & Levine, J. A. (2015). Low-cost and scalable classroom equipment to promote physical activity and improve education. Journal of Physical Activity and Health, 12(9), 1259-1263. 
McMullen, J., Kulinna, P., & Cothran, D. (2014). Physical activity opportunities during the school day: Classroom teachersÕ perceptions of using activity breaks in the classroom. Journal of Teaching in Physical Education, 33(4), 511-527. 
Mead, T., Scibora, L., Gardner, J., & Dunn, S. (2016). The impact of stability balls, activity breaks, and a sedentary classroom on standardized math scores. Physical Educator, 73(3), 433. 
Mullender-Wijnsma, M. J., Hartman, E., de Greeff, J. W., Bosker, R. J., Doolaard, S., & Visscher, C. (2016). Moderate-to-vigorous physically active academic lessons and academic engagement in children with and without a social disadvantage: A within subject experimental design. BMC Public Health, 15, 
404. Retrieved from http://doi.org/10.1186/s12889-015-1745-y 
Norris, E., Shelton, N., Dunsmuir, S., Duke-Williams, O., & Stamatakis, E. (2015). Physically active lessons as physical activity and educational interventions: A systematic review of methods and results. Preventive Medicine, 72, 116-125. 
Okely, T., Salmon, J., Vella, S., Cliff, D., Timperio, A., Tremblay, M., É Marino, N. (2012). A systematic review to update the Australian physical activity guidelines for children and young people. 
Report prepared for the Australian Government Department of Health. Canberra, AU: Commonwealth of Australia. 
Owen, K. B., Parker, P. D., Van Zanden, B., MacMillan, F., Astell-Burt, T., & Lonsdale, C. (2016). Physical activity and school engagement in youth: A systematic review and meta-analysis. Educational Psychologist, 51(2), 129-145. 
Quality assessment tool for quantitative studies. (2008). Retrieved from http://www.nccmt.ca/resources/search/14. 
Rasberry, C. N., Lee, S. M., Robin, L., Laris, B. A., Russell, L. A., Coyle, K. K., & Nihiser, A. J. (2011). The association between school-based physical activity, including physical education, and academic performance: A systematic review of the literature. Preventive Medicine, 52, S10-S20. 
Reed, J. A., Einstein, G., Hahn, E., Hooker, S. P., Gross, V. P., & Kravitz, J. (2010). Examining the impact of integrating physical activity on fluid intelligence and academic performance in an elementary school setting: A preliminary investigation. Journal of Physical Activity and Health, 7(3), 343-351. 
Ridgers, N. D., Stratton, G., Fairclough, S. J., & Twisk, J. W. (2007). Long-term effects of a playground markings and physical structures on children's recess physical activity levels. Preventive Medicine, 44(5), 393-397. 
Riley, N., Lubans, D. R., Holmes, K., & Morgan, P. J. (2016). Findings from the EASY minds cluster randomized controlled trial: Evaluation of a physical activity integration program for mathematics in primary schools. Journal of Physical Activity and Health, 13(2), 198-206. 
Riley, N., Lubans, D. R., Morgan, P. J., & Young, M. (2015). Outcomes and process evaluation of a programme integrating physical activity into the primary school mathematics curriculum: The EASY Minds pilot randomized controlled trial. Journal of Science and Medicine in Sport, 18(6), 656-661. 
Sallis, J. F., McKenzie, T. L., Alcaraz, J. E., Kolody, B., Faucette, N., & Hovell, M. F. (1997). The effects of a 2-year physical education program (SPARK) on physical activity and fitness in elementary school students: Sports, play and active recreation for kids. American Journal of Public Health, 87(8), 1328.1334. 
Schmidt, M., Benzing, V., & Kamer, M. (2016). Classroom-based physical activity breaks and children's attention: Cognitive engagement works! Frontiers in Psychology, 7, 1474. 
Sibley, B. A., & Etnier, J. L. (2003). The relationship between physical activity and cognition in children: A meta-analysis. Pediatric Exercise Science, 15(3), 243-256. 
Singh, A., Uijtdewilligen, L., Twisk, J. W., Van Mechelen, W., & Chinapaw, M. J. (2012). Physical activity and performance at school: A systematic review of the literature including a methodological quality assessment. Archives of Pediatrics & Adolescent Medicine, 166(1), 49-55. 
Taras, H. (2005). Physical activity and student performance at school. Journal of School Health, 75(6), 214-218. 
Troiano, R. P., Berrigan, D., Dodd, K. W., Masse, L. C., Tilert, T., & McDowell, M. (2008). Physical activity in the United States measured by accelerometer. Medicine and Science in Sports and Exercise, 40(1), 181. 
Trudeau, F., & Shephard, R. J. (2008). Physical education, school physical activity, school sports and academic performance. The International Journal of Behavioral Nutrition and Physical Activity, 5, 10. Retrieved from http://doi.org/10.1186/1479-5868-5-10 
Vazou, S., & Smiley-Oyen, A. (2014). Moving and academic learning are not antagonists: Acute effects on executive function and enjoyment. Journal of Sport and Exercise Psychology, 36(5), 474-485. 
Wilson, A. N., Olds, T., Lushington, K., Petkov, J., & Dollman, J. (2016). The impact of 10-minute activity breaks outside the classroom on male studentsÕ on-task behavior and sustained attention: A randomized crossover design. Acta Paediatrica, 105(4). 

SUGGESTED ACTIVITIES 
Active classrooms. (2004). Retrieved from https://dpi.wi.gov/sites/default/files/imce/sspw/pdf/peactiveclassrooms.pdf 
Active lesson plans. (2018). Retrieved from http://grfit4kids.org/resources/active-lesson-plans/ 
Eddy, M. (2012). Movement in the classroom: Rationales, guidelines and resources to get schools moving. Retrieved from http://www.wellnesscke.net/downloadables/Rationales,Strategies&ResourcesforMovementintheClassroo m.pdf 
Hopkins, G. (2008). Let's get physical! Retrieved from http://www.educationworld.com/a_lesson/lesson063.shtml 
Learning on the move. (2018). Retrieved from http://www.activeacademics.org/ 
MacPherson, E. (2016). 21 awesome ways to get your students moving during learning center time. Retrieved from https://www.weareteachers.com/21-awesome-ways-to-get-your-students-moving-during.learning-center-time/ 
Movement and development lesson plans. (2017). Retrieved from https://www.onecommunityglobal.org/movement-and-development-lesson-plan/ 
Sample strategies for incorporating physical activity into the K-3 classroom. (2011). Retrieved from http://www.p12.nysed.gov/ciai/pe/toolkitdocs/elementary_pe_resource.pdf 
Smith, D. (2016). Classroom integration ideas. Retrieved from http://www.pecentral.org/lessonideas/classroom/classroom.asp 

TECHNOLOGY 
Go noodle: Press play on movement and mindfulness. (2018). Retrieved from https://www.gonoodle.com/ 
Kidfit. (2018). Retrieved from https://play.google.com/store/apps/details?id=com.xdoria.kidfit 
Kids exercise-animal workout. (2016). Retrieved from https://itunes.apple.com/us/app/kids-exercise.animal-workout/id1107468119?mt=8 
Kids yoga journey presents: I am energy. (2018). Retrieved from https://itunes.apple.com/us/app/kids.yoga-journey-presents-i-am-energy/id475863897?mt=8 
Sworkit kids-fitness meets fun. (2017). Retrieved from https://play.google.com/store/apps/details?id=com.sworkit.kids 
Zamzee kick starts a lifetime of physical activity for kids through play. (2018). Retrieved from https://www.zamzee.com/ 
Zombies run. (2018). Retrieved from https://zombiesrungame.com/ 
ADDITIONAL SOURCES 
WEBSITES 
De Le Cruz, D. (2017). Why kids shouldnÕt sit still in class. New York Times. Retrieved from https://www.nytimes.com/2017/03/21/well/family/why-kids-shouldnt-sit-still-in-class.html 
Educating the student body: Taking physical activity and physical education to school. (2013). Retrieved from http://www.nationalacademies.org/hmd/Reports/2013/Educating-the-Student-Body-Taking.Physical-Activity-and-Physical-Education-to-School.aspx 
Bauernfeind, N. M. (2016). The impact of physical movement on academic learning. Retrieved from https://digitalcommons.hamline.edu/cgi/viewcontent.cgi?article=5174&context=hse_all 
Griss, S. (2013). The power of movement in teaching and learning. Retrieved from https://www.edweek.org/tm/articles/2013/03/19/fp_griss.html 
Lamprechth, A. (2016). The benefits of movement in the Classroom. Retrieved from http://literacyandlanguagecenter.com/the-benefits-of-movement-in-the-classroom/ 
Lindberg, S. (2016). How movement in the classroom helps kids focus. Retrieved from https://www.parent.com/how-movement-in-the-classroom-helps-kids-focus/ 
Teachers find creative ways to integrate movement into the classroom. (2016). Retrieved from https://healthyschoolscampaign.org/chicago-policy/teachers-find-creative-ways-to-integrate-movement.into-the-classroom/ 
Whitmer, R. (2014). Instruction in motion brings PE into classroom: Giving students a much-needed brain break-and academic boost-with exercises in class. Retrieved from https://www.districtadministration.com/article/instruction-motion-brings-pe-classroom 
Wilson, D. (2014). Move your body, grow your brain. Retrieved from https://www.edutopia.org/blog/move-body-grow-brain-donna-wilson 

BOOKS AVAILABLE AT DALTON STATE COLLEGE LIBRARY 
Galloway, J. (2007). Fit kids-Smarter kids. Oxford, UK: Meyer & Meyer Sport. Retrieved from http://dsc.idm.oclc.org/login?url=http://search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=39 4342&site=ehost-live 
Hardy, C. A., & Mawer, M. (1999). Learning and teaching in physical education. London, UK: Routledge. 
Kohl, H. W., & Cook, H. D. (2013). Educating the student body: Taking physical activity and physical education to school. Washington, DC: National Academies Press. Retrieved from http://dsc.idm.oclc.org/login?url=http://search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=86 7848&site=ehost-live 
Melville, S., & Walmsley, H. (1998). Elementary health and physical education: A classroom teacher's guide. Dubuque, IA: Kendall/Hunt. 
Pangrazi, R. (2004). Lesson plans for dynamic physical education for elementary school children (14th ed.). San Francisco, CA: Pearson/Benjamin Cummings. 

VIDEOS 
Action words, Part 1 (classroom physical activity breaks) [Video file]. (2014). Retrieved from https://youtu.be/fF9qrV7P8tk 
Beaux sterling pro [Video file]. (2011). Classroom movement opener. Retrieved from https://youtu.be/XrLiB0OSqOg 
Brain breaks-action songs for children-move and freeze-kids songs [Video file]. (2015). Retrieved from https://youtu.be/388Q44ReOWE 
Fit lit: How movement impacts learning [Video file]. (2015). Retrieved from https://youtu.be/BlSYEiycot8 
Gombash, L. (2013). ABC's of movement activity cards [Video file]. Retrieved from https://youtu.be/.ky6eNJwDKk 
I get loose-Koo Koo Roo. (2015). Retrieved from https://youtu.be/if8qfVjVFc8?list=PLOneB99AOIEf5kVN83zANj1iPPaUktfRo 
Konntz, S. (2011). Math and movement [Video file]. Retrieved from https://youtu.be/9HdDRh0Ohvk 
Kutchey, P. (2016). Incorporating movement into the Classroom [Video file]. Retrieved from https://youtu.be/iyQN9zhx_ec 
Trees and squirrels (classroom physical activity breaks) [Video file]. (2012). Retrieved from https://youtu.be/i32a5T-JsEc 

SCHOLARLY JOURNAL ARTICALS 
Kayes, J. E. (2014). TeachersÕ perceptions of the effects of physical activity and movement on student learning and in the classroom [MasterÕs thesis]. Retrieved from https://tspace.library.utoronto.ca/bitstream/1807/68730/1/Kayes_Jennifer_E_201506_MT_MTRP.pdf 
Lepine, N. (2013). Learning through movement: Integrating physical education with the classroom curriculum. Retrieved from https://sophia.stkate.edu/maed/35/ 
Lynch, T., & Soukup, G. J. (2017). Primary physical education (PE): School leader perceptions about classroom teacher quality implementation. Retrieved from https://www.tandfonline.com/doi/full/10.1080/2331186X.2017.1348925 
Nalder, M., & Northcote, M. (2015). The impact of integrated movement-based activities on primary school aged students in the classroom. Retrieved from http://research.avondale.edu.au/teachcollection/vol1/iss1/1 
Snyder, K., Dinkel, D. M., Schaffer, C., Hiveley, S., & Colpitts, A. (2017). Purposeful movement: The integration of physical activity into a mathematics unit. International Journal of Research in Education and Science, 3(1), 75-87. 
Van, M. (2012). Movement in learning: Revitalizing the classroom [MasterÕs thesis]. Retrieved from http://digitalcollections.sit.edu/ipp_collection/541/ 
Wiebelhaus, S., & Fryer Hanson, M. (2016). Effects of classroom-based physical activities on off-task behaviors and attention: Kindergarten case study. The Qualitative Report, 21(8), 1380-1393. Retrieved from http://nsuworks.nova.edu/tqr/vol21/iss8/2 

MOLLY ZHOU, Ed.D. 

Dr. Molly Zhou is an associate professor in the School of Education at Dalton State College. Her research interests are education, culture and diversity, technology, assessment and teacher preparation. Dr. Zhou received her Bachelor's degree in English. She earned her Master's Degree in Educational Administration. Dr. Zhou continued further studies in curriculum studies and she earned her doctorate in Curriculum and Instruction from University of West Florida. She has published articles on education, diversity, technology, assessment, and sustainability in teaching and learning and teacher preparation. She has published books on diversity and teacher preparation. She is also the Editor-In-Chief of The International Journal of Teacher Education and Professional Development. Her research studies were presented at regional, national and international conferences. Dr. Zhou loves nature and enjoys walking, hiking, and swimming. 
DAVID BROWN, M.S. & M.A. 

David Brown is currently an instructional technologist at Dalton State College. He has worked at Dalton State since 2011 both as instructional technologist and as instructional technology librarian. Before coming to Dalton State, Mr. Brown worked at Georgia Northwestern Technical College and at the University of Tennessee. He has a Master's degree in Instructional Technology from Georgia Southern and a Master's degree in Information Science from the University of Tennessee. 






`;

let start = Date.now();
//console.log(lookFor(letters, "the"));
let end = Date.now();
let totalTime = end - start;
console.log(totalTime/1000 + "ms")





