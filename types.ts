
export interface SourceLink {
  label: string;
  url: string;
}

export interface CaseLaw {
  case_id: string;
  case_name: string;
  decision_date: string;
  court: string;
  division: string;
  ponente: string;
  proceeding_type: string;
  context: string;
  child_age: string;
  article_213_issue: string;
  key_rule_or_holding: string;
  outcome: string;
  compelling_reasons_alleged_or_discussed: string[];
  exploitation_or_strategy_notes: string[];
  primary_sources: SourceLink[];
  secondary_sources?: SourceLink[];
  evidence_tags?: {
    mother_unfitness_alleged: string[];
    father_unfitness_alleged: string[];
    notes: string[];
  };
  strategy_tags?: string[];
  art213_extracts?: {
    tender_age_sentence: string;
    notes: string[];
  };
  citations_internal?: string[];
  citations_external?: string[];
}

export interface Statute {
  code: string;
  name: string;
  description: string;
  impact: string;
  severity: 'Critical' | 'High' | 'Medium';
}

export interface StrategyStep {
  id: string;
  title: string;
  description: string;
  actionItems: string[];
  riskLevel: 'High' | 'Medium' | 'Low';
}

export interface Bill {
  id: string;
  code: string;
  title: string;
  status: string;
  lastUpdate: string;
  impact: string;
  probability: 'High' | 'Medium' | 'Low';
  history?: string;
}

export interface ScientificStudy {
  id: string;
  title: string;
  researchers: string;
  journal: string;
  year: string;
  finding: string;
  significance: string;
  category: 'Meta-Analysis' | 'Outcomes' | 'Attachment' | 'Fathers' | 'Development';
}

export interface Treaty {
  id: string;
  name: string;
  article: string;
  text: string;
  violation: string;
  complianceStatus: 'Non-Compliant' | 'Partial' | 'Compliant';
  agency: string;
}

export interface Contact {
  id: string;
  agency: string;
  department: string;
  description: string;
  contactInfo: string[];
  utility: string;
  category: 'Emergency' | 'Legal' | 'Government' | 'US';
}

// --- AI & CHAT TYPES ---

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ActionPlan {
  riskAssessment: string;
  immediateActions: string[];
  legalStrategy: string[];
  longTermGoals: string[];
  requiredResources: string[];
}
