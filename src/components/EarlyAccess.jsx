import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { Check, ArrowRight, AlertCircle, Loader2 } from 'lucide-react'

// ── Change this to your Node API URL ───────────────────────────
const API_URL = 'http://localhost:3000/api/waitlist'

// ── Validators ─────────────────────────────────────────────────
const validators = {
  fullName: (v) => {
    if (!v.trim()) return 'Full name is required'
    if (v.trim().length < 2) return 'Name must be at least 2 characters'
    if (!/^[a-zA-Z\s.\-']+$/.test(v.trim())) return 'Name contains invalid characters'
    return null
  },
  email: (v) => {
    if (!v.trim()) return 'Email address is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())) return 'Enter a valid email address'
    return null
  },
  phone: (v) => {
    if (!v.trim()) return 'Mobile number is required'
    const digits = v.replace(/\D/g, '')
    if (digits.length < 7 || digits.length > 15) return 'Enter a valid mobile number (7–15 digits)'
    return null
  },
  clinicName: (v, role) => {
    if (role !== 'provider') return null
    if (!v.trim()) return 'Clinic name is required'
    if (v.trim().length < 2) return 'Clinic name must be at least 2 characters'
    return null
  },
  specialty: (v, role) => {
    if (role !== 'provider') return null
    if (!v) return 'Please select your specialty'
    return null
  },
}

function validateAll(form, role) {
  const errors = {}
  // phone is required for BOTH provider and patient
  const fields = ['fullName', 'email', 'phone']
  if (role === 'provider') fields.push('clinicName', 'specialty')
  fields.forEach((field) => {
    const fn = validators[field]
    if (fn) {
      const err = fn(form[field], role)
      if (err) errors[field] = err
    }
  })
  return errors
}

// ── Reusable field wrapper ──────────────────────────────────────
function FieldError({ message }) {
  if (!message) return null
  return (
    <p className="flex items-center gap-1 text-red-500 text-[11px] mt-1">
      <AlertCircle size={11} className="shrink-0" />
      {message}
    </p>
  )
}

function InputField({ label, required, error, children }) {
  return (
    <div>
      <label className="block text-xs font-medium text-navy/60 mb-1.5">
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
      <FieldError message={error} />
    </div>
  )
}

const inputClass = (hasError) =>
  `w-full border rounded-lg px-3 py-2.5 text-sm text-navy placeholder-navy/30 focus:outline-none transition-colors ${
    hasError
      ? 'border-red-400 focus:border-red-500 bg-red-50/30'
      : 'border-navy/15 focus:border-gold/50'
  }`

// ── Main component ──────────────────────────────────────────────
export default function EarlyAccess() {
  const { ref, visible } = useReveal()

  const [role, setRole] = useState('provider')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState(null)
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    clinicName: '',
    specialty: '',
    city: '',
    source: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // re-validate live only after the field has been touched
    if (touched[name]) {
      const fn = validators[name]
      const err = fn ? fn(value, role) : null
      setErrors((prev) => ({ ...prev, [name]: err }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const fn = validators[name]
    const err = fn ? fn(value, role) : null
    setErrors((prev) => ({ ...prev, [name]: err }))
  }

  const handleRoleSwitch = (r) => {
    setRole(r)
    // re-run validation in context of new role so errors update immediately
    setErrors(validateAll(form, r))
  }

  const handleSubmit = async () => {
    // touch all required fields so errors show
    const requiredFields = ['fullName', 'email', 'phone']
    if (role === 'provider') requiredFields.push('clinicName', 'specialty')

    setTouched(requiredFields.reduce((acc, f) => ({ ...acc, [f]: true }), {}))

    const validationErrors = validateAll(form, role)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setLoading(true)
    setApiError(null)

    try {
      const payload = {
        role,
        fullName: form.fullName.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
        ...(role === 'provider' && {
          clinicName: form.clinicName.trim(),
          specialty: form.specialty,
        }),
        ...(form.city.trim() && { city: form.city.trim() }),
        ...(form.source && { source: form.source }),
      }

      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || `Server error: ${res.status}`)
      }

      setSubmitted(true)
    } catch (err) {
      setApiError(
        err.message === 'Failed to fetch'
          ? 'Could not reach the server. Please check your connection and try again.'
          : err.message
      )
    } finally {
      setLoading(false)
    }
  }

  const benefits = [
    { label: 'Priority pilot access', desc: 'First to onboard when we open to more clinics' },
    { label: 'Pricing shared with waitlist first', desc: 'Pilot is free for selected providers' },
    { label: 'Direct feedback line to the team', desc: 'Shape what gets built before public launch' },
  ]

  return (
    <section id="early-access" className="py-24 bg-offwhite" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* ── Left: pitch ── */}
          <div className={`reveal ${visible ? 'visible' : ''}`}>
            <span className="section-label">Early Access</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy mt-3 leading-tight mb-5">
              Be among
              <br />the first.
            </h2>
            <p className="text-navy/60 text-sm leading-relaxed mb-8 max-w-sm">
              We are onboarding a limited number of providers and patients for our pilot
              programme. Join the waitlist to be notified first — and to help shape what
              gets built next.
            </p>

            <div className="space-y-4">
              {benefits.map((b) => (
                <div key={b.label} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={10} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-navy text-sm font-semibold">{b.label}</div>
                    <div className="text-navy/50 text-xs">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: form card ── */}
          <div
            className={`reveal delay-200 ${visible ? 'visible' : ''} bg-white rounded-2xl border p-8 shadow-sm`}
            style={{ borderColor: 'rgb(26 39 68 / 0.08)' }}
          >
            {/* ── Success state ── */}
            {submitted ? (
              <div className="py-10 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                  <Check size={28} className="text-gold" />
                </div>
                <h3 className="font-serif text-2xl text-navy font-medium">
                  You're on the list.
                </h3>
                <p className="text-navy/55 text-sm max-w-xs">
                  We'll be in touch when we open early access. Thank you for your
                  interest in TMJConnect.
                </p>
              </div>
            ) : (
              <>
                {/* ── Role toggle ── */}
                <div className="flex bg-navy/5 rounded-xl p-1 mb-6">
                  {['provider', 'patient'].map((r) => (
                    <button
                      key={r}
                      onClick={() => handleRoleSwitch(r)}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                        role === r
                          ? 'bg-white text-navy shadow-sm'
                          : 'text-navy/50 hover:text-navy'
                      }`}
                    >
                      I am a {r.charAt(0).toUpperCase() + r.slice(1)}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">

                  {/* Full Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <InputField
                      label="Full Name"
                      required
                      error={touched.fullName && errors.fullName}
                    >
                      <input
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Dr. Jane Smith"
                        className={inputClass(touched.fullName && errors.fullName)}
                      />
                    </InputField>

                    <InputField
                      label="Email Address"
                      required
                      error={touched.email && errors.email}
                    >
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="jane@clinic.com"
                        className={inputClass(touched.email && errors.email)}
                      />
                    </InputField>
                  </div>

                  {/* Mobile Number — required for BOTH roles */}
                  <InputField
                    label="Mobile Number"
                    required
                    error={touched.phone && errors.phone}
                  >
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+1 (555) 000-0000"
                      className={inputClass(touched.phone && errors.phone)}
                    />
                  </InputField>

                  {/* Provider-only fields */}
                  {role === 'provider' && (
                    <>
                      <InputField
                        label="Clinic Name"
                        required
                        error={touched.clinicName && errors.clinicName}
                      >
                        <input
                          name="clinicName"
                          value={form.clinicName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="TMJ Pain Center"
                          className={inputClass(touched.clinicName && errors.clinicName)}
                        />
                      </InputField>

                      <InputField
                        label="Specialty"
                        required
                        error={touched.specialty && errors.specialty}
                      >
                        <select
                          name="specialty"
                          value={form.specialty}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`${inputClass(touched.specialty && errors.specialty)} appearance-none bg-white`}
                        >
                          <option value="">Select your specialty</option>
                          <option>TMJ / Orofacial Pain</option>
                          <option>General Dentist (DDS/DMD)</option>
                          <option>Physical Therapist (PT/OT)</option>
                          <option>Oral Surgeon</option>
                          <option>Other</option>
                        </select>
                      </InputField>
                    </>
                  )}

                  {/* Optional fields — same for both roles */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <InputField label="City / State" error={null}>
                      <input
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        placeholder="New York, NY"
                        className={inputClass(false)}
                      />
                    </InputField>

                    <InputField label="How did you hear about us?" error={null}>
                      <select
                        name="source"
                        value={form.source}
                        onChange={handleChange}
                        className={`${inputClass(false)} appearance-none bg-white`}
                      >
                        <option value="">Select an option</option>
                        <option>LinkedIn</option>
                        <option>Referral from colleague</option>
                        <option>Conference / Event</option>
                        <option>Search / Google</option>
                        <option>Social media</option>
                        <option>Other</option>
                      </select>
                    </InputField>
                  </div>

                  {/* API error banner */}
                  {apiError && (
                    <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      <AlertCircle size={15} className="text-red-500 shrink-0 mt-0.5" />
                      <p className="text-red-600 text-xs leading-relaxed">{apiError}</p>
                    </div>
                  )}

                  {/* Submit button */}
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full btn-primary justify-center py-3 mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        Request Early Access <ArrowRight size={15} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-navy/35 leading-relaxed">
                    We respect your privacy. Your information will only be used to contact
                    you about early access.
                    <br />We will never share or sell your data.{' '}
                    <a href="#" className="underline hover:text-navy/60">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}