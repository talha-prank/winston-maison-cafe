import React, { useState } from 'react';
import { translations } from '../data/translations';
import { Language, ReservationFormData } from '../types';
import { X, Calendar, Clock, Users, User, Phone, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ReservationModal: React.FC<Props> = ({ isOpen, onClose, lang }) => {
  const t = translations[lang];
  const isEn = lang === 'en';

  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequest: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ReservationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ReservationFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = t.reservation.errors.nameRequired;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      newErrors.phone = t.reservation.errors.phoneRequired;
    }
    if (!formData.date) {
      newErrors.date = t.reservation.errors.dateRequired;
    }
    if (!formData.time) {
      newErrors.time = t.reservation.errors.timeRequired;
    }
    if (!formData.guests) {
      newErrors.guests = t.reservation.errors.guestsRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate gentle network dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      specialRequest: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Table Reservation Form"
      className="fixed inset-0 z-50 bg-[#0C0705]/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={handleResetAndClose}
    >
      <div
        className="bg-[#170E09] border border-[#3D281C] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#22160F] hover:bg-[#2C1D14] text-[#DEC5A7] hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* Honest Success Message following guidelines */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#C59B27]/15 border border-[#C59B27]/40 flex items-center justify-center mx-auto mb-4 text-[#C59B27]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-serif text-[#FAF7F2] mb-3">
              {t.reservation.successModal.title}
            </h3>

            <p className="text-base text-[#EDD28E] font-medium mb-4">
              “{t.reservation.successModal.message}”
            </p>

            <div className="bg-[#22160F] border border-[#3D281C] rounded-xl p-4 text-xs text-[#DEC5A7]/85 text-left space-y-2 mb-6">
              <p>{t.reservation.successModal.note}</p>
              <div className="pt-2 border-t border-[#3D281C]/60 text-[#FAF7F2] font-mono">
                <div>Guest: {formData.fullName} ({formData.guests} guests)</div>
                <div>Date & Time: {formData.date} at {formData.time}</div>
                <div>Contact: {formData.phone}</div>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3 rounded-xl bg-[#C59B27] text-[#100A07] font-semibold text-xs uppercase tracking-wider hover:bg-[#EDD28E] transition-colors cursor-pointer"
            >
              {t.reservation.successModal.close}
            </button>
          </div>
        ) : (
          /* Reservation Form */
          <div>
            <div className="mb-6">
              <div className="text-xs uppercase tracking-[0.2em] text-[#C59B27] font-semibold mb-1">
                {t.reservation.eyebrow}
              </div>
              <h3 className="text-2xl font-serif text-[#FAF7F2]">
                {t.reservation.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#DEC5A7]/80 mt-1">
                {t.reservation.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#DEC5A7] font-medium mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>{t.reservation.form.fullName} *</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                  }}
                  placeholder={t.reservation.form.fullNamePlaceholder}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#1F140E] border text-sm text-[#FAF7F2] placeholder:text-[#DEC5A7]/40 focus:outline-none transition-colors ${
                    errors.fullName ? 'border-red-500/80 focus:border-red-500' : 'border-[#3D281C] focus:border-[#C59B27]'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#DEC5A7] font-medium mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>{t.reservation.form.phone} *</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: undefined });
                  }}
                  placeholder={t.reservation.form.phonePlaceholder}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#1F140E] border text-sm text-[#FAF7F2] placeholder:text-[#DEC5A7]/40 focus:outline-none transition-colors ${
                    errors.phone ? 'border-red-500/80 focus:border-red-500' : 'border-[#3D281C] focus:border-[#C59B27]'
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#DEC5A7] font-medium mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>{t.reservation.form.date} *</span>
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => {
                      setFormData({ ...formData, date: e.target.value });
                      if (errors.date) setErrors({ ...errors, date: undefined });
                    }}
                    className={`w-full px-3 py-2.5 rounded-xl bg-[#1F140E] border text-xs sm:text-sm text-[#FAF7F2] focus:outline-none transition-colors ${
                      errors.date ? 'border-red-500/80 focus:border-red-500' : 'border-[#3D281C] focus:border-[#C59B27]'
                    }`}
                  />
                  {errors.date && (
                    <p className="text-xs text-red-400 mt-1">{errors.date}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#DEC5A7] font-medium mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>{t.reservation.form.time} *</span>
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => {
                      setFormData({ ...formData, time: e.target.value });
                      if (errors.time) setErrors({ ...errors, time: undefined });
                    }}
                    className={`w-full px-3 py-2.5 rounded-xl bg-[#1F140E] border text-xs sm:text-sm text-[#FAF7F2] focus:outline-none transition-colors ${
                      errors.time ? 'border-red-500/80 focus:border-red-500' : 'border-[#3D281C] focus:border-[#C59B27]'
                    }`}
                  >
                    <option value="">{isEn ? '-- Select Time --' : '-- เลือกเวลา --'}</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="02:30 PM">02:30 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="05:30 PM">05:30 PM</option>
                    <option value="07:00 PM">07:00 PM</option>
                    <option value="08:30 PM">08:30 PM</option>
                  </select>
                  {errors.time && (
                    <p className="text-xs text-red-400 mt-1">{errors.time}</p>
                  )}
                </div>
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#DEC5A7] font-medium mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>{t.reservation.form.guests} *</span>
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#1F140E] border border-[#3D281C] text-sm text-[#FAF7F2] focus:border-[#C59B27] focus:outline-none transition-colors"
                >
                  <option value="1">1 {isEn ? 'Guest (Solo Tasting)' : 'ท่าน'}</option>
                  <option value="2">2 {isEn ? 'Guests (Intimate Table)' : 'ท่าน'}</option>
                  <option value="3">3 {isEn ? 'Guests' : 'ท่าน'}</option>
                  <option value="4">4 {isEn ? 'Guests (Salon Table)' : 'ท่าน'}</option>
                  <option value="5">5 {isEn ? 'Guests' : 'ท่าน'}</option>
                  <option value="6">6+ {isEn ? 'Guests (Group Gathering)' : 'ท่านขึ้นไป'}</option>
                </select>
              </div>

              {/* Special Request */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#DEC5A7] font-medium mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>{t.reservation.form.specialRequest}</span>
                </label>
                <textarea
                  rows={2}
                  value={formData.specialRequest}
                  onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                  placeholder={t.reservation.form.specialRequestPlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#1F140E] border border-[#3D281C] text-sm text-[#FAF7F2] placeholder:text-[#DEC5A7]/40 focus:border-[#C59B27] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#C59B27] hover:bg-[#EDD28E] text-[#100A07] font-semibold text-xs uppercase tracking-wider active:scale-[0.99] transition-all cursor-pointer shadow-lg shadow-[#C59B27]/10 disabled:opacity-50"
                >
                  {isSubmitting ? t.reservation.form.submitting : t.reservation.form.submitBtn}
                </button>
              </div>

              {/* Notice */}
              <p className="text-[11px] text-[#DEC5A7]/60 text-center mt-2">
                {isEn 
                  ? 'Request will be reviewed by Winston Maison café team for table availability.' 
                  : 'คำขอจะได้รับการตรวจสอบโดยทีมงานของร้านเพื่อยืนยันที่นั่งว่าง'}
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
