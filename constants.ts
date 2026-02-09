import { CaseLaw, Statute, StrategyStep, Bill, ScientificStudy, Treaty, Contact } from './types';

export const SCIENCE_DATA: ScientificStudy[] = [
  {
    id: 'forslund',
    title: 'Attachment Goes to Court: Consensus Statement',
    researchers: 'Forslund, T. et al. (70 International Experts)',
    journal: 'Attachment & Human Development',
    year: '2022',
    finding: 'Children form multiple attachments. Monotropy (one primary caregiver) is not supported by science. Overnight care with both parents is vital for infants.',
    significance: 'The definitive modern rebuttal to the "Tender Years" doctrine.',
    category: 'Attachment'
  },
  {
    id: 'bergstrom',
    title: 'Living with Both Parents: Swedish Population Study',
    researchers: 'Bergström, M. et al.',
    journal: 'Journal of Epidemiology & Community Health',
    year: '2015',
    finding: 'Children in shared parenting arrangements (50/50) had better psychosomatic health than those in sole custody, and equal to intact families.',
    significance: 'N=150,000. Proves that "stability" of relationships matters more than "stability" of one address.',
    category: 'Outcomes'
  },
  {
    id: 'bauserman',
    title: 'Child Adjustment in Joint vs. Sole Custody',
    researchers: 'Bauserman, R.',
    journal: 'Journal of Family Psychology',
    year: '2002',
    finding: 'Children in joint custody were better adjusted than sole custody across all domains: general, family, self-esteem, and behavioral.',
    significance: 'The foundational meta-analysis of 33 studies (N=2,650). Found NO difference between joint custody and intact families.',
    category: 'Meta-Analysis'
  },
  {
    id: 'nielsen',
    title: 'Joint vs. Sole Physical Custody Outcomes',
    researchers: 'Nielsen, L.',
    journal: 'Journal of Divorce & Remarriage',
    year: '2018',
    finding: 'In 34 of 60 studies, shared parenting children had better outcomes on ALL measures. No study found they had worse outcomes.',
    significance: 'Most comprehensive review to date. Controlling for income did not erase the shared parenting advantage.',
    category: 'Meta-Analysis'
  },
  {
    id: 'warshak',
    title: 'Social Science Consensus Report',
    researchers: 'Warshak, R. (endorsed by 110 researchers)',
    journal: 'Psychology, Public Policy, and Law',
    year: '2014',
    finding: 'Children under 4 benefit from overnights with fathers. Restricting this risks undermining father commitment.',
    significance: 'Directly refutes the "Tender Years" doctrine for infants and toddlers.',
    category: 'Attachment'
  },
  {
    id: 'lamb',
    title: 'The Role of the Father in Child Development',
    researchers: 'Lamb, M.E.',
    journal: 'Wiley & Sons',
    year: '2010',
    finding: 'Fathers play a unique and critical role in child development that cannot be replicated by mothers. Father absence predicts poor outcomes.',
    significance: 'Establishes that "Maternal Preference" is scientifically invalid.',
    category: 'Development'
  }
];

export const TREATY_DATA: Treaty[] = [
  {
    id: 'hague',
    name: 'Hague Convention on Civil Aspects of Int. Child Abduction',
    article: 'US-PH Accession',
    text: 'The Convention only applies between states that have accepted each other\'s accession.',
    violation: 'The US has NOT accepted Philippine accession due to "concerns regarding judicial performance and enforcement."',
    complianceStatus: 'Non-Compliant',
    agency: 'US State Department / PH DOJ'
  },
  {
    id: 'uncrc_9',
    name: 'UN Convention on the Rights of the Child (UNCRC)',
    article: 'Article 9',
    text: 'States Parties shall ensure that a child shall not be separated from his or her parents against their will... unless necessary for the best interests of the child.',
    violation: 'Article 213 mandates separation from the father based solely on age, not "best interest" or "necessity".',
    complianceStatus: 'Non-Compliant',
    agency: 'Philippine Family Courts'
  },
  {
    id: 'uncrc_18',
    name: 'UN Convention on the Rights of the Child (UNCRC)',
    article: 'Article 18',
    text: 'States Parties shall use their best efforts to ensure recognition of the principle that both parents have common responsibilities for the upbringing and development of the child.',
    violation: 'Article 176 (Family Code) explicitly strips unmarried fathers of "common responsibility" by granting sole authority to the mother.',
    complianceStatus: 'Non-Compliant',
    agency: 'Congress of the Philippines'
  },
  {
    id: 'iccpr_14',
    name: 'Int. Covenant on Civil and Political Rights (ICCPR)',
    article: 'Article 14',
    text: 'All persons shall be equal before the courts and tribunals... entitlement to a fair and public hearing.',
    violation: 'Ex-parte TPOs under RA 9262 violate the right to a fair hearing by removing rights without due process.',
    complianceStatus: 'Partial',
    agency: 'Supreme Court / RTC'
  },
  {
    id: 'ipca_report',
    name: 'US State Dept Annual IPCA Report',
    article: '2023 Report',
    text: 'The United States cites the Philippines as demonstrating a pattern of non-compliance.',
    violation: 'Specifically cites judicial delays and failure of law enforcement to locate children.',
    complianceStatus: 'Non-Compliant',
    agency: 'US State Department'
  }
];

export const CONTACT_DATA: Contact[] = [
  {
    id: 'us_embassy',
    agency: 'US Embassy Manila',
    department: 'American Citizen Services (ACS)',
    description: 'Can conduct welfare checks. Cannot provide legal advice or retrieve children.',
    contactInfo: ['+63-2-5301-2000', 'ACSManila@state.gov'],
    utility: 'Welfare Checks / Passport Issues',
    category: 'US'
  },
  {
    id: 'fbi_manila',
    agency: 'FBI Legal Attaché',
    department: 'Manila Field Office',
    description: 'Liaison for US federal crimes (e.g., International Parental Kidnapping Act).',
    contactInfo: ['+63-2-5301-2000'],
    utility: 'Federal Warrant Enforcement',
    category: 'US'
  },
  {
    id: 'nbi_vawc',
    agency: 'National Bureau of Investigation (NBI)',
    department: 'Violence Against Women & Children Desk',
    description: 'Ironically, this is the desk that handles child recovery operations.',
    contactInfo: ['+63-2-8523-8231', 'vawcd@nbi.gov.ph'],
    utility: 'Child Recovery / Location',
    category: 'Government'
  },
  {
    id: 'bi_main',
    agency: 'Bureau of Immigration',
    department: 'Main Office (Intramuros)',
    description: 'The only place to verify HDO/WLO status or request Allow Departure Orders.',
    contactInfo: ['+63-2-8465-2400', 'xinfo@immigration.gov.ph'],
    utility: 'Exit Clearance',
    category: 'Government'
  },
  {
    id: 'dswd_central',
    agency: 'DSWD',
    department: 'Program Management Bureau (Travel Clearance)',
    description: 'Issues travel clearances for minors. Critical for exit.',
    contactInfo: ['+63-2-8931-8101', 'pmb@dswd.gov.ph'],
    utility: 'Travel Permits',
    category: 'Government'
  },
  {
    id: 'iacat',
    agency: 'IACAT',
    department: 'Inter-Agency Council Against Trafficking',
    description: 'Can stop illegal exit of minors at airports (1343 Action Line).',
    contactInfo: ['1343 (Hotline)', 'secretariat@iacat.gov.ph'],
    utility: 'Blocking Exit',
    category: 'Emergency'
  }
];

export const LEGISLATIVE_BILLS: Bill[] = [
  {
    id: '1',
    code: 'HB 9349',
    title: 'Absolute Divorce Act',
    status: 'Approved by House',
    lastUpdate: 'May 2024',
    impact: 'Functions as a de facto "Shared Parenting" bill. Mandates that every divorce decree include a specific "care and custody" plan, normalizing co-parenting arrangements.',
    probability: 'Medium',
    history: 'Approved on third reading. Contains "Offending Spouse" trap clauses that fathers must navigate carefully.'
  },
  {
    id: '2',
    code: 'SB 2442',
    title: 'Family Courts Enhancement Act',
    status: 'Senate Pending',
    lastUpdate: '2024',
    impact: 'Infrastructural reform to reduce delay. Mandates "Child-Friendly Interview Rooms" (crucial for child\'s choice testimony) and increases court-annexed social workers.',
    probability: 'High',
    history: 'Addresses the "procedural bottleneck" that allows parental alienation to fester.'
  },
  {
    id: '3',
    code: 'HB 1963/9731',
    title: 'Expanded Paternity Leave',
    status: 'Committee Level',
    lastUpdate: '2023-2024',
    impact: 'Direct attack on the sociological basis of the "Tender Years" doctrine. By recognizing fathers as primary caregivers (up to 30 days) and including unmarried fathers.',
    probability: 'Low',
    history: 'Aims to break gender stereotypes explicitly cited in Article 213 jurisprudence.'
  },
  {
    id: '4',
    code: 'SB 2065',
    title: 'Fathers Rights Act (Legacy)',
    status: 'Dead in Committee',
    lastUpdate: '2022',
    impact: 'Proposed equal parental authority for illegitimate fathers who recognize the child.',
    probability: 'Low',
    history: 'Consistently killed due to "Anti-Woman" perception.'
  }
];

export const KEY_CASES: CaseLaw[] = [
  {
    case_id: "G.R. No. 234660",
    case_name: "Sps. Gabun v. Stolk Sr.",
    decision_date: "2023-06-26",
    court: "Supreme Court of the Philippines",
    division: "Third Division",
    ponente: "Singh, J.",
    proceeding_type: "Petition for Review on Certiorari",
    context: "Illegitimate child. Mother died. Maternal grandparents vs. Biological Father. Father was actual custodian but grandparents took child.",
    child_age: "Minor",
    article_213_issue: "Substitute Parental Authority (Art 214/216) vs Biological Father Rights.",
    key_rule_or_holding: "While Art 214 lists grandparents first for substitute authority, the Court remanded to determine if it is in the child's best interest to remain with the father who was the actual custodian.",
    compelling_reasons_alleged_or_discussed: ["Death of Mother", "Actual Custodianship"],
    outcome: "Remanded for full reception of evidence. Acknowledged possibility of father custody over grandparents.",
    exploitation_or_strategy_notes: [
      "The 'Stolk Pathway': Establish actual physical custody immediately. Courts are hesitant to disrupt the status quo even against statutory hierarchy.",
      "Crucial precedent for illegitimate fathers fighting grandparents after the mother is absent/deceased.",
      "The mother died giving birth. The law still tried to prioritize grandparents over the living father."
    ],
    primary_sources: [
       { label: "Supreme Court E-Library", url: "https://elibrary.judiciary.gov.ph/assets/pdf/philrep/2023/G.R.%20No.%20234660.pdf" }
    ],
    strategy_tags: ["substitute_parental_authority", "grandparents_vs_father", "illegitimate_father_rights"]
  },
  {
    case_id: "G.R. No. 156343",
    case_name: "Briones v. Miguel, et al.",
    decision_date: "2004-10-18",
    court: "Supreme Court of the Philippines",
    division: "Third Division",
    ponente: "Panganiban, J.",
    proceeding_type: "Rule 45 petition for review on certiorari",
    context: "Illegitimate child. Mother worked in Japan. Father raised child alone for years. Mother returned and demanded custody.",
    child_age: "Born 1996; ~4 at removal; ~8 at SC decision.",
    article_213_issue: "Interaction of Art. 176 (sole maternal authority) with Art. 213 tender-age presumption.",
    key_rule_or_holding: "Mother has sole parental authority over illegitimate child (Art. 176). Art. 213 bars separation absent compelling reasons. Father has visitorial rights but no custody.",
    compelling_reasons_alleged_or_discussed: [
      "Neglect or abandonment",
      "Unemployment",
      "Immorality",
      "Habitual drunkenness"
    ],
    outcome: "Mother retained custody; Father retained visitation. Hold-Departure Order denied.",
    exploitation_or_strategy_notes: [
      "Shows that father's push for joint custody due to mother's foreign residence failed absent proof of unfitness.",
      "Recognition of the child by the father gives the right to SUPPORT, not custody.",
      "Father was the primary caregiver, yet lost to the returning mother."
    ],
    primary_sources: [
      {
        label: "ChanRobles full text",
        url: "https://chanrobles.com/scdecisions/jurisprudence2004/oct2004/gr_156343_2004.php"
      }
    ],
    strategy_tags: [
      "habeas_corpus_filed_for_custody",
      "child_retained_by_relatives",
      "spa_delegation_to_relative",
      "hold_departure_order_sought",
      "primary_caregiver_ignored",
      "argument_for_joint_or_alternating_custody_due_to_mother_abroad",
      "rule_99_child_choice_deleted_for_unmarried_parents"
    ]
  },
  {
    case_id: "G.R. Nos. 154994 & 156254",
    case_name: "Pablo-Gualberto v. Gualberto",
    decision_date: "2005-06-28",
    court: "Supreme Court of the Philippines",
    division: "Third Division",
    ponente: "Panganiban, J.",
    proceeding_type: "Consolidated Rule 45 and Rule 65 petitions",
    context: "Married parents; declaration of nullity. Trial court found mother neglected child (slapping) and awarded custody to father. SC reversed.",
    child_age: "Almost 4 years old (under 7).",
    article_213_issue: "Whether custody pendente lite of a child under 7 may be awarded to father absent 'compelling reasons'.",
    key_rule_or_holding: "For a child under seven, custody should remain with the mother absent sufficient proof of 'compelling reasons'. General allegations of neglect are insufficient.",
    compelling_reasons_alleged_or_discussed: [
      "Alleged 'lesbian relations'",
      "Alleged lack of care / going out often",
      "Alleged maltreatment (Slapping)"
    ],
    outcome: "Custody pendente lite returned to mother; father granted visitation.",
    exploitation_or_strategy_notes: [
      "Illustrates how Art. 213 can reverse a provisional custody award to father even when Trial Court finds neglect.",
      "The 'Compelling Reasons' bar is impossibly high—even witness testimony of slapping was deemed insufficient."
    ],
    primary_sources: [
      {
        label: "ChanRobles full text",
        url: "https://www.chanrobles.com/scdecisions/jurisprudence2005/jun2005/154994.php"
      }
    ],
    strategy_tags: [
      "custody_pendente_lite_in_marriage_case",
      "allegations_used_to_rebut_tender_age_presumption",
      "importance_of_evidentiary_record",
      "trial_court_reversed"
    ]
  },
  {
    case_id: "G.R. No. 115640",
    case_name: "Espiritu v. Court of Appeals",
    decision_date: "1995-03-15",
    court: "Supreme Court",
    division: "Second Division",
    ponente: "Melo, J.",
    proceeding_type: "Habeas Corpus / Custody",
    context: "Father vs Mother. Mother worked in USA. Father raised kids. Mother convicted of Bigamy. Children over 7.",
    child_age: "Over 7",
    article_213_issue: "Tender Age presumption vs Child Preference (>7).",
    key_rule_or_holding: "The choice of a child over 7 is paramount unless the chosen parent is unfit. The mother's conviction for bigamy and the child's preference for the father outweighed the maternal preference.",
    compelling_reasons_alleged_or_discussed: ["Bigamy", "Child Preference", "Emotional Shock"],
    outcome: "Custody awarded to Father.",
    exploitation_or_strategy_notes: [
      "One of the rare wins for a father, but required: Children > 7, Mother convicted of Bigamy, and Psych testimony.",
      "The Court criticized the CA for being swayed by 'abstract presumptions' rather than relevant facts."
    ],
    primary_sources: [{ label: "LawPhil", url: "https://lawphil.net/judjuris/juri1995/mar1995/gr_115640_1995.html" }],
    strategy_tags: ["child_preference_over_7", "bigamy_evidence", "psychological_testimony", "father_win"]
  },
  {
    case_id: "G.R. No. 118870",
    case_name: "Perez v. Court of Appeals",
    decision_date: "1996-03-29",
    court: "Supreme Court",
    division: "Third Division",
    ponente: "Romero, J.",
    proceeding_type: "Custody",
    context: "Mother working in New York. Father present in PH. Child < 1 year old.",
    child_age: "Under 7 (Infant)",
    article_213_issue: "Present Father vs Absent/Working Mother.",
    key_rule_or_holding: "Custody awarded to mother despite her residence in NY. The Court cited the Code Commission: 'No man can sound the deep sorrows of a mother who is deprived of her child of tender age.'",
    compelling_reasons_alleged_or_discussed: ["Mother's Work Abroad", "Father's Proximity"],
    outcome: "Custody to Mother.",
    exploitation_or_strategy_notes: [
      "Definitive proof that 'Best Interest' often takes a backseat to 'Maternal Feelings' in PH jurisprudence.",
      "Distance or working abroad is NOT a compelling reason to deny custody to the mother."
    ],
    primary_sources: [{ label: "Supreme Court E-Library", url: "https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/23/33660" }],
    strategy_tags: ["mother_abroad", "tender_age_absolute", "emotional_rationale"]
  },
  {
    case_id: "G.R. No. 235498",
    case_name: "Masbate v. Relucio",
    decision_date: "2018-07-30",
    court: "Supreme Court of the Philippines",
    division: "Second Division",
    ponente: "Perlas-Bernabe, J.",
    proceeding_type: "Rule 45 petition (Habeas Corpus)",
    context: "Illegitimate child. Mother left child with father to study. Grandparents took child. Father raised child alone for months.",
    child_age: "Under 7 at SC decision.",
    article_213_issue: "Does tender-age presumption apply to illegitimate children? Can appellate courts grant pre-trial 'temporary custody'?",
    key_rule_or_holding: "Art. 213 applies regardless of legitimacy (ubi lex non distinguit). Custody remains with mother absent unfitness. Deleted CA's 'temporary custody' award.",
    compelling_reasons_alleged_or_discussed: [
      "Neglect",
      "Abandonment",
      "Unemployment"
    ],
    outcome: "Petition partly granted. Visitation maintained. Remanded for trial.",
    exploitation_or_strategy_notes: [
      "Even when the SC acknowledged the father was 'very much willing to take on the whole gamut of parenting', they still defaulted to the mother.",
      "SPA used to justify grandparents acting as custodians.",
      "Non-custodial parent's remedy is visitation, not temporary custody, pending trial."
    ],
    primary_sources: [
      {
        label: "LawPhil PDF",
        url: "https://lawphil.net/judjuris/juri2018/jul2018/pdf/gr_235498_2018.pdf"
      }
    ],
    strategy_tags: [
      "spa_delegation_to_grandparents",
      "child_taken_from_school_by_relatives",
      "trial_required_for_unfitness_allegations",
      "visitation_rights_two_days_per_week",
      "written_maternal_consent_required_to_take_child_out",
      "ca_granted_pretrial_temporary_custody_then_deleted_by_sc"
    ]
  },
  {
    case_id: "G.R. No. 168785",
    case_name: "Dacasin v. Dacasin",
    decision_date: "2010-02-05",
    court: "Supreme Court of the Philippines",
    division: "Second Division",
    ponente: "Carpio, J.",
    proceeding_type: "Rule 45 petition for review",
    context: "Post-foreign divorce; attempt to enforce a joint custody agreement in PH courts.",
    child_age: "Child was nearly 15 at SC decision (beyond tender age).",
    article_213_issue: "Effect of Art. 213's mandatory regime on private custody agreements.",
    key_rule_or_holding: "Joint custody agreement held void for violating Art. 213. Remanded for 'best interest' determination as child was older.",
    compelling_reasons_alleged_or_discussed: [
      "Neglect",
      "Abandonment",
      "Drug addiction",
      "Maltreatment"
    ],
    outcome: "RTC dismissal reversed; remanded for further proceedings.",
    exploitation_or_strategy_notes: [
      "Voluntary custody agreements may be voided if contrary to Art. 213.",
      "Once child is over 7, standard shifts to 'best interests'."
    ],
    primary_sources: [
      {
        label: "ChanRobles full text",
        url: "https://www.chanrobles.com/scdecisions/jurisprudence2010/february2010/168785.php"
      }
    ],
    strategy_tags: [
      "private_joint_custody_agreement_challenged",
      "foreign_divorce_cross_border_context",
      "remand_for_best_interest_determination"
    ]
  },
  {
    case_id: "G.R. No. 167571",
    case_name: "Gamboa v. Court of Appeals",
    decision_date: "2005-09-22",
    court: "Supreme Court of the Philippines",
    division: "First Division",
    ponente: "Davide Jr., C.J.",
    proceeding_type: "Rule 45 Petition",
    context: "Mother allegedly living with a lesbian partner; father used this to argue immorality/unfitness to override Art 213.",
    child_age: "Teenager at time of decision, but tender age at filing.",
    article_213_issue: "Moral unfitness as a compelling reason.",
    key_rule_or_holding: "Sexual preference or moral laxity alone is not sufficient to deprive a mother of custody unless it is proven to adversely affect the child's welfare.",
    compelling_reasons_alleged_or_discussed: [
      "Immorality",
      "Lesbian relationship"
    ],
    outcome: "Custody retained by mother. Immorality not sufficiently proven to harm child.",
    exploitation_or_strategy_notes: [
      "High bar for 'Immorality'. You must prove direct harm to the child, not just the existence of a relationship.",
      "Often cited by opposing counsel to dismiss 'lifestyle' arguments."
    ],
    primary_sources: [
      {
        label: "LawPhil Full Text",
        url: "https://lawphil.net/judjuris/juri2005/sep2005/gr_167571_2005.html"
      }
    ],
    strategy_tags: [
      "immorality_defense",
      "burden_of_proof_on_unfitness"
    ]
  },
  {
    case_id: "G.R. No. 224497",
    case_name: "Sison v. Sison",
    decision_date: "2024-03-15",
    court: "Supreme Court of the Philippines",
    division: "First Division",
    ponente: "Gesmundo, C.J.",
    proceeding_type: "Custody Petition",
    context: "Mother tested positive for methamphetamines (Shabu) during custody battle.",
    child_age: "4 years old.",
    article_213_issue: "Drug use as 'Compelling Reason'.",
    key_rule_or_holding: "Documented drug addiction constitutes a direct threat to the safety of a child, sufficient to override the Art 213 presumption.",
    compelling_reasons_alleged_or_discussed: [
      "Drug Addiction",
      "Child Safety"
    ],
    outcome: "Custody awarded to father despite tender age.",
    exploitation_or_strategy_notes: [
      "The 'Gold Standard' for breaking Art 213. Objective medical evidence (drug test) beats subjective 'he-said-she-said'.",
      "Strategically, this encourages requesting random drug testing orders early in proceedings."
    ],
    primary_sources: [
      {
        label: "Supreme Court (Google Search)",
        url: "https://www.google.com/search?q=G.R.+No.+224497+Sison+v.+Sison+Supreme+Court+Decision"
      }
    ],
    strategy_tags: [
      "drug_testing_motion",
      "clinical_unfitness"
    ]
  },
  {
    case_id: "G.R. No. 146495",
    case_name: "Salientes v. Abanilla",
    decision_date: "2006-08-29",
    court: "Supreme Court of the Philippines",
    division: "First Division",
    ponente: "Callejo, Sr., J.",
    proceeding_type: "Petition for Habeas Corpus",
    context: "Father filed Habeas Corpus to recover custody of minor children from the mother.",
    child_age: "Minors",
    article_213_issue: "Propriety of Habeas Corpus as a remedy for custody.",
    key_rule_or_holding: "Habeas corpus may be resorted to in cases where the rightful custody of any person is withheld from the person entitled thereto. However, if the child is in the custody of a parent (mother), deprivation of liberty is not typically satisfied unless she is unfit.",
    compelling_reasons_alleged_or_discussed: [],
    outcome: "Habeas corpus is a valid initial mode, but often converts to a custody battle.",
    exploitation_or_strategy_notes: [
      "Clarifies that Habeas Corpus is the fastest way to get into court, but usually consolidates into a long custody trial.",
      "Don't expect the judge to hand over the child at the first Habeas hearing if the child is with the mother."
    ],
    primary_sources: [
      {
        label: "LawPhil Full Text",
        url: "https://lawphil.net/judjuris/juri2006/aug2006/gr_146495_2006.html"
      }
    ],
    strategy_tags: [
      "habeas_corpus_limitations",
      "procedural_strategy"
    ]
  },
  {
    case_id: "G.R. No. 114742",
    case_name: "Silva v. Court of Appeals",
    decision_date: "1997-07-17",
    court: "Supreme Court of the Philippines",
    division: "Second Division",
    ponente: "Romero, J.",
    proceeding_type: "Visitation Rights petition",
    context: "Parents separated. Mother denied father visitation rights to their illegitimate children. Mother relocated abroad during litigation.",
    child_age: "Minors",
    article_213_issue: "Extent of visitation rights for illegitimate fathers.",
    key_rule_or_holding: "While the mother has sole parental authority (Art. 176), the father has an inherent right to visitation which cannot be denied absent strict proof of danger to the child. Taking the child out requires written maternal consent.",
    compelling_reasons_alleged_or_discussed: [],
    outcome: "Visitation rights upheld, subject to written consent for taking child out.",
    exploitation_or_strategy_notes: [
      "The fallback position: If you cannot win custody under Art 213, you MUST secure enforceable visitation.",
      "Denial of visitation is often used as grounds to later argue for a change in custody due to 'psychological alienation'.",
      "Shows a common leverage point: removal of the child (including travel) can be conditioned on written maternal consent.",
      "Cross-border fact pattern highlights how relocation can harden the practical effect of maternal custody, making enforcement of visitation more difficult."
    ],
    primary_sources: [
      {
        label: "ChanRobles Full Text",
        url: "https://chanrobles.com/scdecisions/jurisprudence1997/jul1997/gr_114742_1997.php"
      }
    ],
    strategy_tags: [
      "visitation_rights_enforcement",
      "illegitimate_father_rights",
      "visitation_rights_with_mother_consent",
      "written_maternal_consent_required_to_take_child_out",
      "child_relocated_abroad_during_litigation"
    ]
  },
  {
    case_id: "G.R. No. 105308",
    case_name: "Cang v. Court of Appeals",
    decision_date: "1998-09-25",
    court: "Supreme Court of the Philippines",
    division: "Third Division",
    ponente: "Romero, J.",
    proceeding_type: "Adoption / Consent",
    context: "Petition for adoption of minor children by new husband; father opposed. Issue of whether father 'abandoned' children.",
    child_age: "Minors",
    article_213_issue: "Abandonment as ground to strip parental authority.",
    key_rule_or_holding: "Abandonment must be real, intentional, and permanent. Mere failure to provide support due to poverty or distance is NOT abandonment.",
    compelling_reasons_alleged_or_discussed: ["Abandonment", "Financial Support"],
    outcome: "Adoption denied. Father retained parental authority.",
    exploitation_or_strategy_notes: [
      "Crucial defense against 'Step-Parent Adoptions' where the mother tries to erase the biological father.",
      "Proves that financial struggle is not grounds for losing parental rights."
    ],
    primary_sources: [{ label: "LawPhil Full Text", url: "https://lawphil.net/judjuris/juri1998/sep1998/gr_105308_1998.html" }],
    strategy_tags: ["adoption_defense", "abandonment_definition"]
  },
  {
    case_id: "G.R. No. 111180",
    case_name: "David v. Court of Appeals",
    decision_date: "1995-11-16",
    court: "Supreme Court",
    division: "First Division",
    ponente: "Bellosillo, J.",
    proceeding_type: "Custody of Illegitimate Child",
    context: "Father recognized illegitimate child and sought custody after mother left child. Mother filed Habeas Corpus.",
    child_age: "Minor",
    article_213_issue: "Recognition by father vs Art 176.",
    key_rule_or_holding: "Recognition of an illegitimate child by the father does not grant him custody, it only grants support and successional rights. Custody remains with the mother.",
    compelling_reasons_alleged_or_discussed: [],
    outcome: "Custody with Mother.",
    exploitation_or_strategy_notes: [
      "Common misconception: Fathers think signing the birth certificate (Affidavit of Paternity) gives them custody rights. It does not.",
      "It actually increases liability (Support) without increasing rights (Custody).",
      "Early and often-cited illustration of the 'default maternal custody' rule for illegitimate children in habeas corpus posture.",
      "Demonstrates how an access or travel event (trip/outing) can become a custody 'grab' opportunity."
    ],
    primary_sources: [{ label: "ChanRobles", url: "https://chanrobles.com/scdecisions/jurisprudence1995/nov1995/111180.php" }],
    strategy_tags: ["paternity_recognition_risks", "illegitimate_status", "habeas_corpus_filed_for_custody"]
  },
  {
    case_id: "G.R. No. 127673",
    case_name: "Madriaga v. Court of Appeals",
    decision_date: "2005-07-12",
    court: "Supreme Court",
    division: "Second Division",
    ponente: "Austria-Martinez, J.",
    proceeding_type: "Habeas Corpus",
    context: "Parents separated. Father took child. Mother filed Habeas Corpus.",
    child_age: "Under 7",
    article_213_issue: "Habeas Corpus as mandatory remedy.",
    key_rule_or_holding: "When Art 213 applies, the writ of Habeas Corpus is the proper remedy to return the child to the mother immediately.",
    compelling_reasons_alleged_or_discussed: [],
    outcome: "Writ granted. Child returned to mother.",
    exploitation_or_strategy_notes: [
      "Illustrates the 'Nuclear Option' mothers have. If you take the child, they don't just sue for custody, they sue for Habeas Corpus.",
      "This is summary in nature—much faster than a full trial."
    ],
    primary_sources: [{ label: "LawPhil", url: "https://lawphil.net/judjuris/juri2005/jul2005/gr_127673_2005.html" }],
    strategy_tags: ["habeas_corpus_risk", "immediate_return"]
  },
  {
    case_id: "G.R. No. 122906",
    case_name: "Tonog v. Court of Appeals",
    decision_date: "2002-02-07",
    court: "Supreme Court",
    division: "Third Division",
    ponente: "Panganiban, J.",
    proceeding_type: "Custody",
    context: "Illegitimate children. Mother left them with Father's relatives.",
    child_age: "Minors",
    article_213_issue: "Abandonment vs Art 213.",
    key_rule_or_holding: "While abandonment is a ground to separate a child from the mother, it must be proven by 'compelling evidence'. The court remanded for further reception of evidence.",
    compelling_reasons_alleged_or_discussed: ["Abandonment"],
    outcome: "Remanded. Temporary custody with father pending trial.",
    exploitation_or_strategy_notes: [
      "Even when the mother leaves, it is not an automatic win. You still have to prove it in a full trial."
    ],
    primary_sources: [{ label: "ChanRobles", url: "https://chanrobles.com/scdecisions/jurisprudence2002/feb2002/122906.php" }],
    strategy_tags: ["abandonment_evidence", "remand_delays"]
  },
  {
    case_id: "G.R. No. 133 Phil. 884",
    case_name: "Lacson v. San Jose-Lacson",
    decision_date: "1968-08-30",
    court: "Supreme Court",
    division: "En Banc",
    ponente: "Castro, J.",
    proceeding_type: "Custody",
    context: "Interpreting the Civil Code precursor to Art 213.",
    child_age: "Under 7",
    article_213_issue: "Mandatory nature of 'Shall'.",
    key_rule_or_holding: "Established that 'shall' in the law is MANDATORY. Courts have no discretion to award custody to the father for children under 7 unless compelling reasons exist.",
    compelling_reasons_alleged_or_discussed: [],
    outcome: "Custody to Mother.",
    exploitation_or_strategy_notes: [
      "The origin of the strict interpretation.",
      "Quoted the Code Commission: 'No man can sound the deep sorrows of a mother...'"
    ],
    primary_sources: [{ label: "LawPhil", url: "https://lawphil.net/judjuris/juri1968/aug1968/gr_l-23482_1968.html" }],
    strategy_tags: ["mandatory_statute", "historical_context"]
  },
  {
    case_id: "G.R. No. 206248",
    case_name: "Grande v. Antonio",
    decision_date: "2014-02-18",
    court: "Supreme Court of the Philippines",
    division: "TBD",
    ponente: "TBD",
    proceeding_type: "Petition for Review",
    context: "Unmarried relationship produced two illegitimate children; father sought judicial approval of recognition with prayers for parental authority and surname change.",
    child_age: "Minors",
    article_213_issue: "Article 176 maternal authority baseline.",
    key_rule_or_holding: "Illegitimate children are under the sole parental authority of the mother (Art. 176). Father cannot compel use of his surname, nor obtain custody via recognition alone.",
    compelling_reasons_alleged_or_discussed: [],
    outcome: "Father denied parental authority and mandatory surname change.",
    exploitation_or_strategy_notes: [
      "Illustrates a recurring 'workaround attempt': using a recognition/filiation proceeding to obtain parental authority.",
      "Highlights that absent proof of maternal unfitness, the mother retains authority even if father acknowledges paternity."
    ],
    primary_sources: [{ label: "LawPhil", url: "https://lawphil.net/judjuris/juri2014/feb2014/gr_206248_2014.html" }],
    strategy_tags: ["petition_for_recognition_with_custody_prayer", "attempt_to_compel_surname_change_for_illegitimate_child", "irr_voided_mandatory_use_of_fathers_surname"]
  },
  {
    case_id: "G.R. No. 166682",
    case_name: "Bagtas v. Santos",
    decision_date: "2009-11-27",
    court: "Supreme Court of the Philippines",
    division: "Supreme Court",
    ponente: "TBD",
    proceeding_type: "Habeas Corpus / Custody",
    context: "Habeas corpus proceeding involving competing custody claims.",
    child_age: "Minor",
    article_213_issue: "Procedural: Habeas Corpus scope.",
    key_rule_or_holding: "In child-custody habeas corpus proceedings, the case is not mooted merely by producing the child; courts must proceed to determine custodial fitness and best interest.",
    compelling_reasons_alleged_or_discussed: [],
    outcome: "Remanded for best-interest determination.",
    exploitation_or_strategy_notes: [
      "Directly relevant to 'procedural exploitation': a party can try to moot a habeas corpus petition by temporarily producing the child, but Bagtas rejects this.",
      "Supports an anti-evasion rule: custody disputes cannot be resolved by physical possession games alone."
    ],
    primary_sources: [{ label: "ChanRobles", url: "https://www.chanrobles.com/cralaw/2009novemberdecisions.php?id=1267" }],
    strategy_tags: ["habeas_corpus_filed_for_custody", "remand_for_best_interest_determination", "trial_required_for_unfitness_allegations"]
  }
];

export const KEY_STATUTES: Statute[] = [
  {
    code: 'Art. 213',
    name: 'The Tender Years Doctrine',
    description: 'No child under seven years of age shall be separated from the mother unless the court finds compelling reasons.',
    impact: 'The primary blocker. Creates a statutory presumption of maternal custody that acts as an "Iron Curtain".',
    severity: 'Critical'
  },
  {
    code: 'Art. 176',
    name: 'Illegitimate Status',
    description: 'Illegitimate children shall be under the sole and exclusive parental authority of the mother.',
    impact: 'Strips unmarried fathers of custodial rights entirely, limiting them to visitation only.',
    severity: 'Critical'
  },
  {
    code: 'A.M. No. 24-11-02-SC',
    name: 'Guidelines on Videoconferencing',
    description: 'Effective Feb 2026. Explicitly authorizes virtual participation for all stages of proceedings, including mediation, from abroad.',
    impact: 'Operationalizes "Electronic Visitation" as an enforceable right and allows OFW fathers to testify without returning to PH.',
    severity: 'High'
  },
  {
    code: 'A.M. No. 22-09-15-SC',
    name: 'Rule on Intl. Child Abduction',
    description: 'Operationalizes the Hague Convention for treaty partners. Sets expedited timelines and Central Authority (DSWD) role.',
    impact: 'Provides a "Summary Return" mechanism for European/Treaty-partner cases, but highlights the gap for US cases.',
    severity: 'High'
  },
  {
    code: 'RA 9262',
    name: 'Anti-VAWC Act',
    description: 'Protects women/children from violence. Often weaponized to obtain ex-parte Temporary Protection Orders (TPO).',
    impact: 'Used to criminalize fathers and block access immediately upon arrival in PH.',
    severity: 'High'
  },
  {
    code: 'A.M. No. 03-04-04-SC',
    name: 'Rule on Custody of Minors',
    description: 'The procedural manual for Family Courts. Defines how custody trials are conducted, including Pre-Trial Conference and Provisional Custody.',
    impact: 'Allows the court to award "Provisional Custody" pending litigation. This is the battleground for the first 2-3 years.',
    severity: 'High'
  },
  {
    code: 'Hague Gap',
    name: 'Treaty Non-Compliance',
    description: 'The US has not accepted the Philippines accession to the Hague Convention on Civil Aspects of International Child Abduction.',
    impact: 'Prevents the "Summary Return" mechanism. Custody must be litigated in Philippine courts under Philippine law.',
    severity: 'Critical'
  },
  {
    code: 'HDO / WLO',
    name: 'Border Restrictions',
    description: 'Hold Departure Orders (Criminal) and Watchlist Orders. Issued by Courts or DOJ.',
    impact: 'Prevents the child (or you) from leaving the country even if you have physical possession.',
    severity: 'High'
  },
  {
    code: 'DSWD A.O. 12',
    name: 'Travel Clearance for Minors',
    description: 'Minors traveling abroad alone or with a non-parent require a DSWD Clearance. If traveling with a parent, rules vary by legitimacy.',
    impact: 'Bureau of Immigration may offload a father traveling with an illegitimate child absent mother’s consent.',
    severity: 'High'
  }
];

export const STRATEGIES: StrategyStep[] = [
  {
    id: '1',
    title: 'Jurisdictional Anchor',
    description: 'Stop the movement. Secure your standing.',
    actionItems: ['Retain Specialist Counsel (Not just general Family Law)', 'File Habeas Corpus in Family Court', 'Request Hold Departure Order (HDO)'],
    riskLevel: 'High'
  },
  {
    id: '2',
    title: 'The Evidence Trap',
    description: 'You cannot win on "Better Parent". You win on "Unfit Mother".',
    actionItems: ['Commission Private Investigator', 'Document Drug Use (Hair Follicle)', 'Psychological Evaluation of Child'],
    riskLevel: 'High'
  },
  {
    id: '3',
    title: 'The Counter-Strike',
    description: 'Reversing the momentum.',
    actionItems: ['File RA 9262 for Psychological Violence against Child', 'Petition for Substitute Parental Authority', 'Leverage Settlement for Exit'],
    riskLevel: 'Medium'
  },
  {
    id: '4',
    title: 'The Digital Pivot',
    description: 'Leveraging A.M. No. 24-11-02-SC.',
    actionItems: ['File Motion for Electronic Visitation immediately', 'Log every missed video call as "Contempt"', 'Testify via videoconference from Consulate'],
    riskLevel: 'Medium'
  },
  {
    id: '5',
    title: 'The HDO Hedge',
    description: 'Locking down the exit routes.',
    actionItems: ['File Criminal Case (e.g., Kidnapping/Failure to Return) to trigger Hold Departure Order', 'File Immigration Lookout Bulletin (ILBO) with DOJ', 'Alert US Embassy American Citizen Services'],
    riskLevel: 'Medium'
  },
  {
    id: '6',
    title: 'The Exit Gauntlet',
    description: 'Clearing the Bureau of Immigration (BI).',
    actionItems: ['Secure DSWD Travel Clearance (if applicable)', 'Verify no active WLO/HDO against self', 'Carry Apostilled Court Orders + Certificate of Finality at airport'],
    riskLevel: 'High'
  }
];
