import React, { useState } from 'react';

function ModalForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+998 ',
    email: '',
    organization: '',
    comment: '',
  });

  const [errors, setErrors] = useState({});
  const [tooltipMessage, setTooltipMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    if (!value.startsWith('+998 ')) {
      setFormData({
        ...formData,
        phone: '+998 ' + value.replace('+998 ', ''),
      });
    } else {
      const numericPart = value.replace('+998 ', '').replace(/\D/g, '');
      const limitedValue = '+998 ' + numericPart.slice(0, 9); 
      setFormData({
        ...formData,
        phone: limitedValue,
      });
    }
  };

  const handleFocus = (e) => {
    const { id } = e.target;
    if (id === 'phone' && !formData.phone.startsWith('+998 ')) {
      setFormData({
        ...formData,
        phone: '+998 ',
      });
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      email: value,
    });

    const isValid = validateEmail(value);
    if (!isValid) {
      setTooltipMessage("Elektron pochtani to'g'ri kiriting");
    } else {
      setTooltipMessage('');
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const launchToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
  

    Object.keys(formData).forEach((key) => {
      if ((key === 'name' || key === 'phone' || key === 'organization') && !formData[key].trim()) {
        newErrors[key] = "To'ldirish uchun majburiydir";
      }  
      if (key === 'phone' && formData.phone === '+998 ') {
        newErrors[key] = "To'ldirish uchun majburiydir";
      }
      if (key === 'email' && formData[key].trim() && !validateEmail(formData[key])) {
        newErrors[key] = "Elektron pochtani to'g'ri kiriting";
      }
    });
  
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
  
      try {
        const telegramBotId = '6726738927:AAGIYuTh1DBQ2-1kSnnVtlFIlgZ3TcIAkus'; 
        const chatId = '966230102'; 
        const message = `*Title:* Xalqaro Test Markazi\n\n*👤  Ism:* ${formData.name.replace(/[_*[\]()~\`>#+-=|{}.!]/g, '\\$&')}\n\n*📞  Telefon:* ${formData.phone.replace(/[_*[\]()~\`>#+-=|{}.!]/g, '\\$&')}\n\n*📧  Email:* ${formData.email.replace(/[_*[\]()~\`>#+-=|{}.!]/g, '\\$&')}\n\n*🏢  Tashkilot:* ${formData.organization.replace(/[_*[\]()~\`>#+-=|{}.!]/g, '\\$&')}\n\n*💬  Izoh:* ${formData.comment.replace(/[_*[\]()~\`>#+-=|{}.!]/g, '\\$&')}`;
  
        const response = await fetch(`https://api.telegram.org/bot${telegramBotId}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'MarkdownV2',
          }),
        });
  
        if (response.ok) {
          launchToast();
          setFormData({
            name: '',
            phone: '+998 ',
            email: '',
            organization: '',
            comment: '',
          });
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        console.error('Error sending message:', error);
        
      }
    }
  };
  
  
  

  return (
    <form className="Modal_form" onSubmit={handleSubmit}>
 
      <label htmlFor="name">Ism *</label>
      <div className="input-wrapper">
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <label htmlFor="phone">Telefon *</label>
      <div className="input-wrapper">
        <input
          type="text"
          id="phone"
          value={formData.phone}
          onChange={handlePhoneChange}
          onFocus={handleFocus}
          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
          placeholder="+998 XXXXXXXX"
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
      </div>

      <label htmlFor="email">Email *</label>
      <div className="input-wrapper">
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleEmailChange}
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        {tooltipMessage && <div className="invalid-feedback">{tooltipMessage}</div>}
      </div>

      <label htmlFor="organization">Tashkilot *</label>
      <div className="input-wrapper">
        <input
          type="text"
          id="organization"
          value={formData.organization}
          onChange={handleChange}
          className={`form-control ${errors.organization ? 'is-invalid' : ''}`}
        />
        {errors.organization && <div className="invalid-feedback">{errors.organization}</div>}
      </div>

      <label htmlFor="comment">Izoh qoldiring</label>
      <div className="input-wrapper">
        <textarea
          id="comment"
          value={formData.comment}
          onChange={handleChange}
          className={`form-control ${errors.comment ? 'is-invalid' : ''}`}
        />
        {errors.comment && <div className="invalid-feedback">{errors.comment}</div>}
      </div>

      <div className="d-flex align-items-center my-2">
        <input className="form-check-input me-3 my-0" type="checkbox" defaultChecked />
        <span>
          Qayta ishlashga rozilik beraman
          <a href="https://it-bilim.uz/politika-konfidentsialnosti/" target="_blank" rel="noopener noreferrer" tabIndex="0">shaxsiy ma'lumotlar</a>
        </span>
      </div>
      <button className="btn grey transparent small" type="submit">Yuborish</button>
    </form>
  );
}

export default ModalForm;
