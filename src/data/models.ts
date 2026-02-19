export type SignalStatus = 'stable' | 'watch' | 'action';
export type Severity = 'critical' | 'high' | 'medium';

export interface HealthSignal {
  title: string;
  status: SignalStatus;
  summary: string;
  details: string;
}

export interface Alert {
  title: string;
  description: string;
  severity: Severity;
  suggestedAction: string;
}

export interface TrendPoint {
  label: string;
  value: number;
}

export interface Trend {
  title: string;
  direction: 'up' | 'down' | 'flat';
  delta: string;
  points: TrendPoint[];
  note: string;
}

export interface HistoryEntry {
  id: string;
  date: string;
  title: string;
  primaryAttention: string;
  status: SignalStatus;
  brief: string[];
}

export interface IntelligenceModel {
  executiveBrief: string[];
  primaryAttention: string;
  healthSignals: HealthSignal[];
  alerts: Alert[];
  trends: Trend[];
}

export type ModelKey = 'growth' | 'distributed' | 'public';

export const models: Record<ModelKey, IntelligenceModel> = {
  growth: {
    executiveBrief: [
      'Revenue growth rate at 18% MoM, exceeding Q3 target by 3.2 percentage points.',
      'Burn rate increased 8% over prior period; runway projected at 14 months at current pace.',
      'Customer Acquisition Cost up 12% — unit economics require immediate review.',
      'Monthly churn at 3.1%, trending upward for second consecutive period.',
      'Two enterprise compliance audits outstanding; regulatory exposure window open.',
      'Net Revenue Retention at 104% — expansion revenue offsetting new logo pressure.',
    ],
    primaryAttention: 'CAC Elevation + Churn Acceleration — Unit Economics Under Pressure',
    healthSignals: [
      {
        title: 'Revenue Momentum',
        status: 'stable',
        summary: 'MoM growth at 18%, on track against Q3 targets.',
        details: 'Revenue momentum remains strong at 18% month-over-month growth, outperforming the 14.8% Q3 target. New logo acquisition is driving the majority of top-line expansion, with SMB segment contributing 62% of new ARR. Enterprise pipeline coverage stands at 2.4x, supporting forward quarter projections. Expansion MRR from existing accounts has increased 6% sequentially, partially compensating for elevated churn pressures in the SMB tier.',
      },
      {
        title: 'Burn Stability',
        status: 'watch',
        summary: 'Burn increased 8% — runway at 14 months, requires monitoring.',
        details: 'Monthly operational burn has risen 8% versus the prior period, primarily attributed to headcount additions in Sales and Engineering. At current velocity, cash runway stands at approximately 14 months. The board-approved 18-month runway threshold requires a burn reduction of $340K/month or equivalent revenue acceleration within 60 days. CFO has initiated a departmental efficiency review scheduled for completion next week.',
      },
      {
        title: 'Unit Economics',
        status: 'action',
        summary: 'CAC up 12% — LTV:CAC ratio declining below acceptable threshold.',
        details: 'Customer Acquisition Cost has risen 12% sequentially, compressing the LTV:CAC ratio from 3.8x to 3.1x. The 3.0x threshold represents the minimum acceptable level for capital-efficient growth at this stage. Primary contributors are increased paid media spend efficiency loss (CPL up 22%) and sales cycle elongation in the mid-market segment. A cross-functional task force review of go-to-market spending allocation is recommended within the next 5 business days.',
      },
      {
        title: 'Compliance Exposure',
        status: 'watch',
        summary: 'Two audits outstanding; exposure window remains open.',
        details: 'Two compliance audits remain outstanding: SOC 2 Type II renewal (overdue by 18 days) and a data residency review required for EU enterprise contract execution. The EU contract represents $420K in ARR currently on hold pending compliance closure. Legal counsel has been engaged. Estimated resolution timeline is 12-15 business days if current pace is maintained. Executive sign-off on the data residency framework is the critical path item.',
      },
    ],
    alerts: [
      {
        title: 'Unit Economics Threshold Breach',
        description: 'LTV:CAC ratio has declined to 3.1x, approaching the 3.0x minimum viable threshold. Continued CAC elevation will trigger capital efficiency review.',
        severity: 'critical',
        suggestedAction: 'Convene GTM efficiency review within 5 business days and approve reallocation of $180K from paid acquisition to content-led channels.',
      },
      {
        title: 'Churn Rate Consecutive Increase',
        description: 'Monthly churn has risen for two consecutive periods, now at 3.1%. SMB cohort is the primary driver with 4.2% monthly churn.',
        severity: 'high',
        suggestedAction: 'Authorize deployment of dedicated customer success coverage for at-risk SMB accounts in the $5K–$15K ARR band.',
      },
      {
        title: 'Compliance Audit Overdue',
        description: 'SOC 2 Type II renewal is 18 days overdue. EU enterprise contract worth $420K ARR is blocked pending data residency review completion.',
        severity: 'high',
        suggestedAction: 'Executive sign-off required on the data residency framework document. Review scheduled for tomorrow.',
      },
    ],
    trends: [
      {
        title: 'Revenue Growth',
        direction: 'up',
        delta: '+18%',
        points: [
          { label: 'Feb', value: 55 },
          { label: 'Mar', value: 62 },
          { label: 'Apr', value: 68 },
          { label: 'May', value: 71 },
          { label: 'Jun', value: 78 },
          { label: 'Jul', value: 88 },
          { label: 'Aug', value: 95 },
        ],
        note: 'Consistent upward trajectory. Q3 target exceeded by 3.2pp.',
      },
      {
        title: 'Burn Trend',
        direction: 'down',
        delta: '+8% burn',
        points: [
          { label: 'Feb', value: 40 },
          { label: 'Mar', value: 42 },
          { label: 'Apr', value: 43 },
          { label: 'May', value: 46 },
          { label: 'Jun', value: 50 },
          { label: 'Jul', value: 55 },
          { label: 'Aug', value: 60 },
        ],
        note: 'Runway at 14 months. Efficiency review in progress.',
      },
      {
        title: 'Churn Velocity',
        direction: 'down',
        delta: '+3.1%',
        points: [
          { label: 'Feb', value: 20 },
          { label: 'Mar', value: 18 },
          { label: 'Apr', value: 22 },
          { label: 'May', value: 24 },
          { label: 'Jun', value: 30 },
          { label: 'Jul', value: 38 },
          { label: 'Aug', value: 45 },
        ],
        note: 'Two-period consecutive increase. SMB cohort primary driver.',
      },
    ],
  },

  distributed: {
    executiveBrief: [
      'Consolidated revenue velocity at 94% of plan — Region B underperformance driving the gap.',
      'Operational output efficiency down 6% across three regions due to logistics constraints.',
      'Inventory imbalance detected in northern corridor — surplus 18%, deficit 22% in eastern corridor.',
      'Gross margin pressure of 230bps attributed to freight cost escalation and volume shortfalls.',
      'Credit exposure in Region A has exceeded internal threshold by $1.2M — review required.',
      'Cross-regional fulfillment SLA compliance at 87%, below the 92% contractual baseline.',
    ],
    primaryAttention: 'Inventory Imbalance + Margin Pressure — Regional Rebalancing Required',
    healthSignals: [
      {
        title: 'Revenue Velocity',
        status: 'watch',
        summary: 'Consolidated at 94% of plan; Region B is the primary drag.',
        details: 'Consolidated revenue velocity is tracking at 94% of the current period plan. Region A is performing at 101% of target, providing partial offset. Region B is the primary gap contributor at 84% of plan, driven by a combination of key account delays and elevated competitive displacement in two product categories. Department X is at 97% of plan. Executive intervention in Region B is recommended to evaluate whether the shortfall is recoverable within the current period.',
      },
      {
        title: 'Regional Performance',
        status: 'watch',
        summary: 'Region B at 84% of plan; logistics constraints across three regions.',
        details: 'Regional performance variance is widening. Region A at 101% — logistics stable, key account retention strong. Region B at 84% — two major accounts on payment hold, logistics delays averaging 4.2 days over SLA. Region C within acceptable range at 95%. Department X at 97% with stable operational metrics. The logistics constraint affecting Region B and C originates from a single third-party carrier bottleneck. Contingency carrier engagement has been initiated.',
      },
      {
        title: 'Inventory Balance',
        status: 'action',
        summary: 'Northern surplus 18%; eastern deficit 22% — rebalancing required.',
        details: 'Inventory distribution imbalance has reached an actionable level. The northern corridor is carrying an 18% surplus across 3 SKU categories, representing approximately $2.1M in idle working capital. The eastern corridor has a 22% deficit in high-velocity SKUs, leading to an estimated $340K in lost revenue per week. A rebalancing transfer of $1.8M in inventory value has been drafted and requires executive authorization to proceed. Transit time is estimated at 6-8 business days.',
      },
      {
        title: 'Margin Pressure',
        status: 'action',
        summary: 'Gross margin down 230bps — freight escalation and volume shortfalls.',
        details: 'Gross margin has compressed 230 basis points versus prior period. Primary drivers: freight cost escalation of 14% due to carrier rate increases and fuel surcharges ($890K impact), and volume shortfall-driven overhead absorption inefficiency ($420K impact). Partial offsets from pricing adjustments and product mix improvements have reduced the net impact. The CFO has prepared a margin recovery plan for board review. Key decision required: whether to pass freight cost increases to customers or absorb through operational efficiency initiatives.',
      },
    ],
    alerts: [
      {
        title: 'Inventory Rebalancing Authorization Required',
        description: 'Eastern corridor deficit is generating $340K/week in lost revenue. A $1.8M inventory transfer requires executive authorization to proceed.',
        severity: 'critical',
        suggestedAction: 'Authorize the inventory rebalancing transfer. Operations team is staged and ready to execute within 24 hours of approval.',
      },
      {
        title: 'Credit Exposure Threshold Exceeded',
        description: 'Region A credit exposure at $3.4M, exceeding the $2.2M internal threshold by $1.2M. Three accounts are driving the concentration risk.',
        severity: 'high',
        suggestedAction: 'Engage CFO and Regional Director for Region A to review credit terms and initiate account-level collection escalation.',
      },
      {
        title: 'SLA Compliance Below Contractual Floor',
        description: 'Fulfillment SLA compliance at 87% against a 92% contractual baseline. Exposure to penalty clauses across 6 enterprise accounts.',
        severity: 'high',
        suggestedAction: 'Activate contingency carrier agreement and reallocate fulfillment capacity from low-priority routes to SLA-critical accounts immediately.',
      },
    ],
    trends: [
      {
        title: 'Revenue Velocity',
        direction: 'down',
        delta: '-6% vs plan',
        points: [
          { label: 'Feb', value: 98 },
          { label: 'Mar', value: 96 },
          { label: 'Apr', value: 99 },
          { label: 'May', value: 95 },
          { label: 'Jun', value: 92 },
          { label: 'Jul', value: 90 },
          { label: 'Aug', value: 88 },
        ],
        note: 'Region B performance gap widening. Intervention recommended.',
      },
      {
        title: 'Regional Performance Spread',
        direction: 'flat',
        delta: 'Widening',
        points: [
          { label: 'Feb', value: 70 },
          { label: 'Mar', value: 65 },
          { label: 'Apr', value: 60 },
          { label: 'May', value: 58 },
          { label: 'Jun', value: 55 },
          { label: 'Jul', value: 52 },
          { label: 'Aug', value: 50 },
        ],
        note: 'Performance variance between regions continues to widen.',
      },
      {
        title: 'Inventory Stability',
        direction: 'down',
        delta: 'Deteriorating',
        points: [
          { label: 'Feb', value: 85 },
          { label: 'Mar', value: 82 },
          { label: 'Apr', value: 75 },
          { label: 'May', value: 68 },
          { label: 'Jun', value: 60 },
          { label: 'Jul', value: 52 },
          { label: 'Aug', value: 44 },
        ],
        note: 'Imbalance worsening. Rebalancing authorization pending.',
      },
    ],
  },

  public: {
    executiveBrief: [
      'Population coverage rate at 76.4% — 8 districts below the 70% minimum threshold.',
      'Stock-out risk elevated in 4 high-priority zones; estimated 12-day window before critical shortage.',
      'Compliance audit completion rate at 83% — 17% of mandatory reviews remain outstanding.',
      'Estimated resource leakage of $1.8M identified across three program areas; investigation initiated.',
      'Average emergency response time at 18.3 minutes — 2.3 minutes above the 16-minute SLA target.',
      'Budget utilization at 68% with 38% of fiscal period remaining — absorption risk emerging.',
    ],
    primaryAttention: 'Coverage Gaps + Stock-Out Risk — Service Continuity at Risk in 4 Zones',
    healthSignals: [
      {
        title: 'Coverage Rate',
        status: 'watch',
        summary: '76.4% overall coverage — 8 districts below minimum threshold.',
        details: 'Overall population coverage stands at 76.4% against the 80% program target. Eight districts are below the 70% minimum threshold, which triggers mandatory escalation under program guidelines. The three lowest-performing districts are operating at 58%, 61%, and 64% respectively. Capacity constraints, personnel availability gaps, and transportation access challenges are the primary contributors. A reallocation plan from over-covered districts has been prepared and requires director-level approval.',
      },
      {
        title: 'Stock-Out Risk',
        status: 'action',
        summary: 'Critical shortage window estimated at 12 days in 4 priority zones.',
        details: 'Four high-priority service zones are approaching critical inventory levels for essential supplies. At current consumption rates, stock-out is projected within 12 days for Zone 2 (11 days), Zone 5 (12 days), Zone 8 (9 days), and Zone 11 (14 days). Emergency procurement authorization for $420K has been drafted. Supply chain constraints may extend the standard 8-day lead time to 11-12 days, creating a potential 1-3 day gap in service continuity. Immediate executive authorization is required.',
      },
      {
        title: 'Compliance Integrity',
        status: 'watch',
        summary: '83% completion — 17% of mandatory reviews outstanding.',
        details: 'Audit compliance completion is at 83% for the current review cycle. The remaining 17% includes 3 high-priority mandatory reviews that are past due. Of these, two involve program areas with federal reporting requirements, where non-completion creates regulatory exposure within 30 days. The primary bottleneck is staff availability rather than willingness. A temporary cross-deployment from lower-priority program areas has been proposed to address the backlog.',
      },
      {
        title: 'Leakage Risk',
        status: 'action',
        summary: '$1.8M in estimated resource leakage identified across 3 program areas.',
        details: 'Internal audit has identified estimated resource leakage of $1.8M across three program areas: Program Area 7 ($840K, procurement irregularities), Program Area 12 ($620K, duplicate service billing), and Program Area 3 ($340K, allocation discrepancies). Investigations have been initiated for each. Program Area 7 findings have been referred to the Inspector General. Recovery actions are in progress for Program Areas 12 and 3. Board notification may be required depending on final confirmed amounts.',
      },
    ],
    alerts: [
      {
        title: 'Emergency Procurement Authorization Required',
        description: 'Stock-out window for 4 priority zones is 9-14 days. Emergency procurement of $420K requires executive authorization. Lead time is 11-12 days.',
        severity: 'critical',
        suggestedAction: 'Authorize emergency procurement immediately. Every 24-hour delay narrows the service continuity buffer. Procurement team is staged for same-day execution.',
      },
      {
        title: 'Resource Leakage Investigation',
        description: '$1.8M in estimated leakage across 3 program areas. Program Area 7 findings referred to Inspector General. Board notification threshold may be triggered.',
        severity: 'high',
        suggestedAction: 'Convene executive oversight review. Confirm whether confirmed leakage amounts trigger mandatory board notification requirements under program charter.',
      },
      {
        title: 'Coverage Floor Breach in 8 Districts',
        description: '8 districts are below the 70% minimum coverage threshold, triggering mandatory program guidelines escalation. 3 districts below 65%.',
        severity: 'high',
        suggestedAction: 'Approve reallocation of personnel and transportation resources from over-covered to under-served districts. Reallocation plan is prepared and awaiting sign-off.',
      },
    ],
    trends: [
      {
        title: 'Coverage Rate Trend',
        direction: 'down',
        delta: '-4.2pp',
        points: [
          { label: 'Feb', value: 82 },
          { label: 'Mar', value: 81 },
          { label: 'Apr', value: 80 },
          { label: 'May', value: 79 },
          { label: 'Jun', value: 78 },
          { label: 'Jul', value: 77 },
          { label: 'Aug', value: 76 },
        ],
        note: 'Gradual decline over 6 periods. 8 districts below floor.',
      },
      {
        title: 'Stock-Out Risk Level',
        direction: 'down',
        delta: 'Accelerating',
        points: [
          { label: 'Feb', value: 90 },
          { label: 'Mar', value: 85 },
          { label: 'Apr', value: 78 },
          { label: 'May', value: 70 },
          { label: 'Jun', value: 60 },
          { label: 'Jul', value: 48 },
          { label: 'Aug', value: 35 },
        ],
        note: 'Critical threshold breach in 4 zones within 9-14 days.',
      },
      {
        title: 'Compliance Rate',
        direction: 'flat',
        delta: '+1% MoM',
        points: [
          { label: 'Feb', value: 79 },
          { label: 'Mar', value: 80 },
          { label: 'Apr', value: 81 },
          { label: 'May', value: 82 },
          { label: 'Jun', value: 82 },
          { label: 'Jul', value: 83 },
          { label: 'Aug', value: 83 },
        ],
        note: 'Slow improvement. 3 high-priority reviews remain overdue.',
      },
    ],
  },
};

export const intelligenceHistory: HistoryEntry[] = [
  {
    id: 'h1',
    date: 'February 12, 2026',
    title: 'Executive Brief — February 12',
    primaryAttention: 'Regional Performance Divergence',
    status: 'watch',
    brief: [
      'Revenue velocity at 96% of plan — slightly below target but within acceptable variance.',
      'Region B showing early signs of performance divergence versus peer regions.',
      'Inventory balance within acceptable parameters; no rebalancing required.',
      'Compliance reviews on track — 91% completion versus 90% target.',
      'Credit exposure within thresholds across all regions.',
      'Fulfillment SLA at 93%, above contractual 92% baseline.',
    ],
  },
  {
    id: 'h2',
    date: 'February 5, 2026',
    title: 'Executive Brief — February 5',
    primaryAttention: 'SLA Compliance Pressure Emerging',
    status: 'watch',
    brief: [
      'Revenue at 98% of plan — strong performance across all regions.',
      'Fulfillment SLA beginning to soften in Region B; early warning indicator triggered.',
      'Inventory levels balanced across all corridors.',
      'Gross margin stable with minor freight cost headwinds.',
      'Credit exposure at $2.0M, within the $2.2M internal threshold.',
      'Compliance audit cycle on schedule; no overdue reviews.',
    ],
  },
  {
    id: 'h3',
    date: 'January 29, 2026',
    title: 'Executive Brief — January 29',
    primaryAttention: 'All Signals Within Normal Parameters',
    status: 'stable',
    brief: [
      'Revenue performance at 102% of plan — strong close to January period.',
      'All regional performance metrics within acceptable variance bands.',
      'Inventory distribution optimal; surplus and deficit levels below 5%.',
      'Gross margin holding steady at target levels.',
      'Fulfillment SLA at 94%, above contractual baseline.',
      'No compliance, credit, or operational escalations active.',
    ],
  },
];
