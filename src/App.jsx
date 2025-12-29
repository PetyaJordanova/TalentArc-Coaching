import React from 'react';

const TalentArc = () => {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", overflowX: 'hidden', width: '100%' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          color: #1A1A1A;
          background: #FFFFFF;
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }

        .headline {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          line-height: 1.1;
        }

        .button {
          display: inline-block;
          padding: 1rem 2.5rem;
          font-weight: 800;
          font-size: 0.9rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          background: #9A6B7A;
          color: #FFFFFF;
          border: none;
          cursor: pointer;
        }

        .button:hover {
          background: #6E4B59;
          transform: translateY(-2px);
        }

        .button-secondary {
          background: transparent;
          border: 2px solid #FFFFFF;
        }

        .button-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .headline {
            font-size: 2.5rem !important;
          }
          .two-col, .service-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        background: '#FFFFFF',
        borderBottom: '1px solid #EFE3E7',
        padding: '1.5rem 2rem',
        zIndex: 1000
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2rem',
            fontWeight: 700,
            color: '#1A1A1A'
          }}>
            TalentArc
          </div>
          <a href="https://calendly.com/talentarc" target="_blank" rel="noopener noreferrer" className="button">
            Book a Session
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #1A1A1A 0%, #6E4B59 100%)',
        padding: '6rem 2rem',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '40%',
          height: '120%',
          background: 'radial-gradient(circle, rgba(154, 107, 122, 0.15) 0%, transparent 70%)',
          borderRadius: '50%'
        }}></div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{
              fontSize: '0.9rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#D4B5BD',
              marginBottom: '1.5rem'
            }}>
              Career Coaching from a Former Recruiter
            </p>

            <h1 className="headline" style={{ fontSize: '4.5rem', marginBottom: '2rem', color: '#FFFFFF' }}>
              Shape Your Career.<br/>Land Your Dream Job.
            </h1>

            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '3rem', opacity: 0.95, fontWeight: 300 }}>
              Eight years as a tech recruiter taught me this: the best hires aren’t the ones who fit a template - they’re the ones who know how to position their unique value. I’ve reviewed thousands of resumes and conducted hundreds of interviews. I know exactly what hiring managers are looking for. Now I use that insider perspective to help you stand out and land the role you deserve.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#services" className="button">See Services</a>
              <a href="https://calendly.com/talentarc/new-meeting" target="_blank" rel="noopener noreferrer" className="button button-secondary">Book Free Call</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: '#9A6B7A', padding: '2.5rem 2rem', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '3rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
                display: 'inline-block',
                padding: '0.5rem 1.5rem',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                borderRadius: '4px',
                background: 'rgba(255, 255, 255, 0.1)'
              }}>
                8 Years
              </div>
              <div style={{ opacity: 0.9, marginTop: '1rem' }}>Recruiting Experience</div>
            </div>
            <div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '3rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
                display: 'inline-block',
                padding: '0.5rem 1.5rem',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                borderRadius: '4px',
                background: 'rgba(255, 255, 255, 0.1)'
              }}>
                90%+
              </div>
              <div style={{ opacity: 0.9, marginTop: '1rem' }}>Offer Acceptance Rate</div>
            </div>
            <div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '3rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
                display: 'inline-block',
                padding: '0.5rem 1.5rem',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                borderRadius: '4px',
                background: 'rgba(255, 255, 255, 0.1)'
              }}>
                1,000+
              </div>
              <div style={{ opacity: 0.9, marginTop: '1rem' }}>Resumes Reviewed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section style={{ padding: '5rem 2rem', background: '#FAF8F5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="headline" style={{ fontSize: '3rem', marginBottom: '1rem', color: '#1A1A1A' }}>
              The Reality
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#6B6B6B', marginBottom: '3rem', lineHeight: 1.8 }}>
              The job market has changed. You’re feeling it.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginTop: '3rem',
              textAlign: 'left'
            }}>
              {[
                {
                  title: 'Applications Disappear Into the Void. Interviews Go Nowhere',
                  description: 'You send out dozen applications. You answer correctly. And somehow it still doesn’t land. You’re qualified, but invisible.'
                },
                {
                  title: 'You Don’t Know How to Break Into the Field You Want',
                  description: 'Tech. Engineering. AI. You want in, but the path isn’t clear. Every posting wants experience you don’t have. No one’s showing you the actual entry points.'
                },
                {
                  title: 'You’re Building a Career, But You Don’t Have a Map',
                  description: 'You know where you want to go, but not how to get there. The steps aren’t obvious. The AI-driven job market has rewritten the rules, and the old advice doesn’t apply.'
                },
                {
                  title: 'Cookie-Cutter Coaching Won’t Get You There',
                  description: 'You need someone who’s hired hundreds of people, built AI and data teams from scratch, and actually understands both the human side and the tech transformation happening right now.'
                }
              ].map((item, idx) => (
                <div key={idx} style={{
                  background: '#FFFFFF',
                  padding: '2rem 1.75rem',
                  borderLeft: '3px solid #9A6B7A'
                }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    marginBottom: '1rem',
                    color: '#1A1A1A',
                    lineHeight: 1.3
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#6B6B6B', lineHeight: 1.7, fontSize: '0.95rem' }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section style={{ padding: '5rem 2rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="two-col" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <p style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#9A6B7A',
                marginBottom: '1rem'
              }}>
                About
              </p>

              <h2 className="headline" style={{ fontSize: '3rem', marginBottom: '2rem', color: '#1A1A1A' }}>
                I've Been on<br/>the Other Side
              </h2>

              <p style={{ fontSize: '1.1rem', color: '#6B6B6B', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                I spent 8 years recruiting for tech companies - Commerzbank, Accenture, 
                ManpowerGroup - hiring for AI, data, and engineering teams.
              </p>

              <p style={{ fontSize: '1.1rem', color: '#6B6B6B', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                During that time, I reviewed thousands of resumes and conducted hundreds of interviews. 
                I also built teams from scratch and led diversity & inclusion initiatives.
              </p>

              <p style={{ fontSize: '1.1rem', color: '#6B6B6B', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                I achieved a 90%+ offer acceptance rate, not by selling candidates a dream, 
                but by preparing them properly and matching them to roles that actually fit.
              </p>

              <p style={{ fontSize: '1.1rem', color: '#1A1A1A', fontWeight: 600, marginBottom: '2rem', lineHeight: 1.8 }}>
                Most people have no idea what happens on the other side. I do. Because I was making those decisions.
              </p>

              <a href="#services" className="button">Work With Me</a>
            </div>

            <div style={{ background: '#FAF8F5', padding: '3rem', borderRadius: '8px' }}>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.8rem',
                fontWeight: 700,
                marginBottom: '2rem',
                color: '#1A1A1A'
              }}>
                What Makes This Different
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  '8 years recruiting for tech companies',
                  '1,000+ resumes reviewed and counting',
                  '90%+ offer acceptance rate',
                  'Built AI, data, and engineering teams from scratch',
                  'Led diversity & inclusion initiatives',
                  'No corporate jargon, just practical insight'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      minWidth: '24px',
                      height: '24px',
                      background: '#9A6B7A',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontSize: '0.8rem',
                      fontWeight: 700
                    }}>
                      ✓
                    </div>
                    <p style={{ color: '#1A1A1A', fontSize: '1.05rem', lineHeight: 1.6 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: '5rem 2rem', background: '#1A1A1A', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#D4B5BD',
              marginBottom: '1rem'
            }}>
              Services
            </p>
            <h2 className="headline" style={{ fontSize: '3.5rem', color: '#FFFFFF' }}>
              How I Can Help
            </h2>
          </div>

          <div className="service-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                name: 'LinkedIn Optimization',
                price: '€30',
                duration: '40 minutes',
                description: 'Your LinkedIn is often the first thing recruiters see - sometimes before your CV. We’ll optimize your profile to get found by recruiters and make them want to reach out.',
                includes: ['Profile audit with recruiter lens', 'Headline and summary rewrite', 'Experience section optimization', 'Searchability and keyword strategy'],
                calendlyLink: 'https://calendly.com/talentarc/linkedin-optimization',
                popular: false
              },
              {
                name: 'CV Review & Rewrite',
                price: '€50',
                duration: '60 minutes',
                description: 'We’ll review your CV together on a call. I’ll show you exactly what’s getting you filtered out. We’ll rewrite it during the session.',
                includes: ['Live CV review and feedback', 'Real-time rewrite', 'ATS optimization', 'Recruiter perspective'],
                calendlyLink: 'https://calendly.com/talentarc/cv-review-rewrite',
                popular: false
              },
              {
                name: 'Mock Interview',
                price: '€70',
                duration: '75 minutes',
                description: 'I’ll interview you as if I’m actually hiring. Then we’ll debrief - what would make me move you forward and what would make me pass.',
                includes: ['50-minute realistic interview', '25-minute detailed feedback', 'Recording of the session', 'Written summary'],
                calendlyLink: 'https://calendly.com/talentarc/mock-interview',
                popular: false
              },
              {
                name: 'Transition Strategy',
                price: '€99',
                duration: '90 minutes',
                description: 'You want to break into a new field but don’t know how to position yourself. We’ll map out your transferable skills, identify realistic entry points, and create a targeted approach.',
                includes: ['Skills translation and positioning', 'Target role identification', 'Gap analysis and upskilling roadmap', 'Networking and application strategy', 'Written action plan'],
                calendlyLink: 'https://calendly.com/talentarc/transition-strategy',
                popular: false
              },
              {
                name: 'Career Starter Package',
                price: '€200',
                duration: '3 sessions',
                description: 'For people who need more than a quick fix. We’ll tackle your CV, interview skills, and job search strategy systematically.',
                includes: ['Session 1: CV and LinkedIn (60 min)', 'Session 2: Mock interview (75 min)', 'Session 3: Job search strategy (45 min)', 'Email support between sessions'],
                calendlyLink: 'https://calendly.com/talentarc/career-starter-package',
                popular: true
              },
              {
                name: 'Career Mentorship',
                price: '€500',
                duration: '6 weeks',
                description: 'For people making a significant career move. We work together over 6 weeks to reposition your experience and create a realistic plan.',
                includes: ['6 weekly one-hour sessions', 'Complete career positioning strategy', 'CV, LinkedIn, portfolio guidance', 'Interview preparation', 'Email/WhatsApp support'],
                calendlyLink: 'https://calendly.com/talentarc/career-mentorship',
                popular: false
              }
            ].map((service, idx) => (
              <div key={idx} style={{
                background: service.popular ? '#6E4B59' : '#2A2A2A',
                padding: '2.5rem 2rem',
                position: 'relative',
                border: service.popular ? '2px solid #9A6B7A' : 'none',
                borderRadius: '4px'
              }}>
                {service.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '2rem',
                    background: '#9A6B7A',
                    color: '#FFFFFF',
                    padding: '0.4rem 1rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}>
                    Most Popular
                  </div>
                )}

                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  color: '#FFFFFF'
                }}>
                  {service.name}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#D4B5BD', marginBottom: '1rem' }}>{service.duration}</p>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '3rem',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  marginBottom: '1rem'
                }}>
                  {service.price}
                </div>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {service.description}
                </p>

                <div style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingTop: '1.5rem',
                  marginBottom: '2rem'
                }}>
                  {service.includes.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                      <div style={{ color: '#D4B5BD', fontSize: '1.2rem' }}>✓</div>
                      <div style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.95rem' }}>{item}</div>
                    </div>
                  ))}
                </div>

                <a href={service.calendlyLink} target="_blank" rel="noopener noreferrer" className="button" style={{
                  width: '100%',
                  textAlign: 'center',
                  background: service.popular ? '#9A6B7A' : '#FFFFFF',
                  color: service.popular ? '#FFFFFF' : '#1A1A1A'
                }}>
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', background: '#FAF8F5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="headline" style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center', color: '#1A1A1A' }}>
              Common Questions
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                {
                  q: "How is this different from other career coaches?",
                  a: "I'm a former recruiter, not a career coach who's never hired anyone. I've made hundreds of hiring decisions. I know what actually matters because I've seen what works."
                },
                {
                  q: "Do I need to prepare anything?",
                  a: "For CV reviews: send me your current CV 24 hours before our session. For mock interviews: just show up ready. I'll guide you through it."
                },
                {
                  q: "How quickly will I see results?",
                  a: "Most clients start getting interview invitations within 2-3 weeks of updating their materials. Results depend on your market, your experience level, and how much effort you put in."
                },
                {
                  q: "Do you work with clients internationally?",
                  a: "Absolutely. All sessions are remote. I work with professionals across Europe, North America, and beyond. I understand both local market nuances and global hiring practices."
                },
                {
                  q: "What industries do you specialize in?",
                  a: "My background is in tech - engineering, product, SaaS, and technical roles. That’s where my expertise runs deepest. However, the fundamentals of how hiring decisions get made, how to position your unique value, and how to navigate modern recruitment systems apply regardless of industry."
                }
              ].map((faq, idx) => (
                <div key={idx} style={{
                  borderBottom: '1px solid #EFE3E7',
                  paddingBottom: '2rem'
                }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    marginBottom: '1rem',
                    color: '#1A1A1A'
                  }}>
                    {faq.q}
                  </h3>
                  <p style={{ color: '#6B6B6B', fontSize: '1.05rem', lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '5rem 2rem',
        background: 'linear-gradient(135deg, #6E4B59 0%, #1A1A1A 100%)',
        color: '#FFFFFF'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="headline" style={{ fontSize: '3.5rem', marginBottom: '2rem', color: '#FFFFFF' }}>
              Ready to Understand What's Actually Going Wrong?
            </h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '3rem', opacity: 0.9, lineHeight: 1.7 }}>
              Book a session. I'll give you honest feedback and practical solutions. 
              No corporate jargon. Just clear insight from someone who's been making hiring decisions for 8 years.
            </p>
            <a href="https://calendly.com/talentarc" target="_blank" rel="noopener noreferrer" className="button" style={{
              background: '#FFFFFF',
              color: '#1A1A1A',
              fontSize: '1rem',
              padding: '1.2rem 3rem'
            }}>
              Book Now
            </a>
            <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', opacity: 0.7 }}>
              Free 15-minute discovery call available
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#1A1A1A',
        color: 'rgba(255, 255, 255, 0.6)',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.5rem',
            fontWeight: 900,
            color: '#FFFFFF',
            marginBottom: '1rem'
          }}>
            TalentArc
          </div>
          <p style={{ marginBottom: '2rem' }}>
            <a href="https://linkedin.com/in/petya-yordanova" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none' }}>
              LinkedIn
            </a>
          </p>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.6)' }}>
            © 2025 Aporis LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TalentArc;
