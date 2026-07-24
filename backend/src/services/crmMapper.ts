import type { CrmLeadPayload, InquiryPayload } from '../types/index.js';

/**
 * Map human-readable visa-type labels to the CRM's expected enum values.
 *
 * CRM accepted values: student, visit, tourist, business.
 * Website labels that don't match a known category map to empty string
 * so the CRM returns a meaningful validation error rather than silently
 * accepting a wrong value.
 */
const VISA_TYPE_MAP: Record<string, string> = {
  'student visa': 'student',
  'student': 'student',
  'study abroad': 'student',
  'work visa': 'business',
  'business visa': 'business',
  'tourist visa': 'tourist',
  'tourist / visitor': 'tourist',
  'visitor visa': 'visit',
  'visitor': 'visit',
  'immigration': 'visit',
  'skilled migration': 'business',
  'family sponsorship': 'visit',
  'family visa': 'visit',
};

function mapVisaType(label: string | undefined): string {
  if (!label) return '';
  return VISA_TYPE_MAP[label.trim().toLowerCase()] ?? '';
}

/**
 * Map a normalized inquiry payload into the CRM DTO expected
 * by the downstream POST /api/v1/lead-inquiries endpoint.
 *
 * All mapping logic lives here — changing the CRM contract
 * requires editing only this file.
 *
 * Business-specific fields (visa_type, preferred_country) must
 * arrive as structured fields, NOT parsed from free-form text.
 */
export function toCrmLeadPayload(payload: InquiryPayload): CrmLeadPayload {
  return {
    request_id: payload.requestId,
    full_name: payload.name,
    email: payload.email,
    phone: payload.phone ?? '',
    visa_type: mapVisaType(payload.visaType),
    preferred_country: payload.preferredCountry ?? '',
    message: payload.message,
    source: 'Website',
  };
}
