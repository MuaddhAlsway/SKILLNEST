import './Testimonial.css';
import women1 from '../assets/Women1.jpg'
import women2 from '../assets/women2.jpg'
import men1 from '../assets/men1.jpg'
const Testimonial = () => {
 const testimonials = [
    {
      id: 1,
      name: 'Ahmed Al-Faisal',
      position: 'Software Engineer',
      img: men1,
      message: 'SKILLNEST helped me upskill quickly. The courses are practical, easy to follow, and boosted my career opportunities!',
    },
    {
      id: 2,
      name: 'Sara Al-Mutairi',
      position: 'Digital Marketer',
      img: women1,
      message: 'I loved the hands-on projects. The instructors are knowledgeable and the platform made learning fun and effective.',
    },
    {
      id: 3,
      name: 'Rania Al-Harbi',
      position: 'UX Designer',
      img: women2,
      message: 'The personalized guidance and practical approach at SKILLNEST really helped me transition into a new career confidently.',
    },
  ];

  return (
    <section className="testimonialSection">
      <h2>What Our Customers Say</h2>
      <div className="testimonialContainer">
        {testimonials.map((t) => (
          <div className="testimonialCard" key={t.id}>
            <img src={t.img} alt={t.name} className="testimonialImg" />
            <p className="testimonialMessage">"{t.message}"</p>
            <h3 className="testimonialName">{t.name}</h3>
            <span className="testimonialPosition">{t.position}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;