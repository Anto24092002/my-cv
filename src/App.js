import React, { useState } from 'react';
import { Analytics } from "@vercel/analytics/react"
import { Mail, Phone, MapPin, Calendar, Award, Code, Globe, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const CV = () => {
  const [expandedSections, setExpandedSections] = useState({
    experience: false,
    education: false,
    skills: false,
    projects: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const skillCategories = {
    technical: ['Microsoft Office', 'Photoshop', 'Affinity Photo', 'DaVinci Resolve', 'HTML/CSS', 'JavaScript', 'React', 'Express', 'Node.js', 'MySQL', 'Next.js'],
    languages: ['English', 'French', 'Arabic'],
    certifications: ['Inbound Marketing', 'Social Media Marketing', 'SEO I & II', 'Digital Marketing', 'Email Marketing', 'Inbound Sales', 'AI Marketing', 'Content Marketing', 'Frictionless Sales', 'Sales Enablement', 'Facebook Ads']
  };

  const experiences = [
    {
      title: 'Product Manager',
      company: 'EasySoft',
      period: 'July 2024 - June 2025',
      achievements: [
        'Conducted market research in Lebanon and international markets to identify new growth opportunities and expansion areas',
        'Created a comprehensive sales and marketing strategy for 2025, combining market analysis and competitive positioning for sustained growth',
        'Built multi-channel expansion through strategic partnerships with freelancers and affiliates, boosting social media reach and market presence',
        'Worked closely with Accounting and Maintenance teams to maintain customer satisfaction and strengthen client relationships',
        'Used analytics tools to track and improve application and website performance, applying data insights to guide product and marketing decisions',
        'Developed targeted market segmentation with personalized conversion strategies for different lead types, improving customer acquisition'
      ]
    },
    {
      title: 'Merchandising Internship',
      company: 'Fattal',
      period: 'Feb 2024 - July 2024',
      achievements: [
        'Monitored and ensured optimal product placement and presentation across multiple retail locations',
        'Gathered qualitative and quantitative data from retail partners on product performance and customer feedback',
        'Optimized product display in relation to the data gathered, which led to increased visibility'
      ]
    },
    {
      title: 'Project Coordinator',
      company: 'Facilitate International',
      period: 'Sep 2022 - Feb 2024',
      achievements: [
        'Coordinated and assessed an average of 45 repairs monthly between technicians and clients',
        'Negotiated technician pricing and made a minimum of 75% return on all workorders while ensuring high-quality service',
        'Delivered detailed service quotes to clients, ensuring accuracy and clarity'
      ]
    }
  ];

  
  const projects = [
    {
      title: 'Sacotel Zenshine Campaign',
      description: 'Directed a university advertising campaign project for Sacotel Zenshine as part of the "Unleash Your Creativity" contest, resulting in a Top 10 nomination among all students in Lebanon',
      
    },
    {
      title: 'Electric Bicycles Market Research',
      description: 'Directed comprehensive market research about the integration of electric bicycles as a transportation method',
      
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 bg-white/20 relative">
              <img
                src="https://i.imgur.com/V8is164.png"
                alt="Anthony Rahme"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130%] h-auto max-w-none"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">Anthony Rahme</h1>
              <p className="text-blue-100 text-lg mb-4">Product Manager & Marketing Professional</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                  <MapPin size={16} />
                  <span>Antelias, Lebanon</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                  <Phone size={16} />
                  <span>+961 71 034352</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                  <Mail size={16} />
                  <span>anthonyrahme24@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="p-8 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Award className="text-blue-600" />
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Driven marketer with experience in market analysis, strategic planning, project coordination, 
            and Product Management. Eager to leverage a strong understanding of 
            customer needs, data-driven decision-making, and functional collaboration to build impactful 
            strategies and drive business growth. Proven ability to develop commercial strategies and 
            manage vendor relationships effectively.
          </p>
        </div>

        {/* Experience Section */}
        <div className="p-8">
          <div 
            className="flex items-center justify-between cursor-pointer mb-6"
            onClick={() => toggleSection('experience')}
          >
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Calendar className="text-blue-600" />
              Professional Experience
            </h2>
            {expandedSections.experience ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-blue-600" />}
          </div>
          
          {expandedSections.experience && (
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                    <div className="flex flex-col md:items-end">
                      <span className="text-blue-600 font-medium">{exp.company}</span>
                      <span className="text-gray-500 text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-700 flex items-start gap-3">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Projects Section */}
        <div className="p-8 bg-gray-50">
          <div
            className="flex items-center justify-between cursor-pointer mb-6"
            onClick={() => toggleSection('projects')}
          >
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <ExternalLink className="text-blue-600" />
              Notable Projects
            </h2>
            {expandedSections.projects ? (
              <ChevronUp className="text-blue-600" />
            ) : (
              <ChevronDown className="text-blue-600" />
            )}
          </div>
          {expandedSections.projects && (
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <span className="text-sm text-blue-600 font-medium">
                    {project.period}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Education Section */}
        <div className="p-8">
          <div 
            className="flex items-center justify-between cursor-pointer mb-6"
            onClick={() => toggleSection('education')}
          >
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Award className="text-blue-600" />
              Education
            </h2>
            {expandedSections.education ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-blue-600" />}
          </div>
          
          {expandedSections.education && (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Bachelor of Business Marketing</h3>
              <p className="text-blue-600 font-medium">Lebanese American University (LAU)</p>
            </div>
          )}
        </div>

        {/* Skills Section */}
        <div className="p-8 bg-gray-50">
          <div 
            className="flex items-center justify-between cursor-pointer mb-6"
            onClick={() => toggleSection('skills')}
          >
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Code className="text-blue-600" />
              Skills & Certifications
            </h2>
            {expandedSections.skills ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-blue-600" />}
          </div>
          
          {expandedSections.skills && (
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Code size={20} className="text-blue-600" />
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.technical.map((skill, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Globe size={20} className="text-blue-600" />
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.languages.map((lang, index) => (
                    <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200 transition-colors duration-200">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Award size={20} className="text-blue-600" />
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.certifications.map((cert, index) => (
                    <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors duration-200">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 text-center">
          <p className="text-blue-100">Built with React & Tailwind CSS • Designed by Anthony Rahme</p>
        </div>
      </div>
    </div>
  );
};

export default CV;