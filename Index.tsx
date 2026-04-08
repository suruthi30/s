import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import { LayoutDashboard, Database, Zap, Brain, Shield, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  { icon: <Database className="w-5 h-5 text-info" />, title: "Data Lakehouse", desc: "Raw → Processed → Curated layers on object storage", link: "/architecture" },
  { icon: <Zap className="w-5 h-5 text-warning" />, title: "Event-Driven ETL", desc: "Fully decoupled, independently scalable stages", link: "/etl-stages" },
  { icon: <Brain className="w-5 h-5 text-primary" />, title: "Self-Tuning Engine", desc: "Dynamic compute selection and resource optimization", link: "/decision-engine" },
  { icon: <Shield className="w-5 h-5 text-destructive" />, title: "Granular Access", desc: "RBAC + ABAC with row/column-level permissions", link: "/access-control" },
  { icon: <Activity className="w-5 h-5 text-info" />, title: "Observability", desc: "Logging, monitoring, alerting, and resilience", link: "/observability" },
];

const Index = () => (
  <PageLayout>
    <PageHeader
      title="Serverless ETL Pipeline"
      description="A cloud-native, event-driven data lakehouse architecture with self-tuning optimization, processing terabytes of structured and unstructured data."
      icon={<LayoutDashboard className="w-5 h-5" />}
    />

    <SectionCard title="Architecture Overview" icon={<Database className="w-4 h-4 text-primary" />}>
      <ArchitectureDiagram />
    </SectionCard>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.08 }}
        >
          <Link to={f.link} className="block h-full">
            <div className="rounded-lg border border-border bg-card p-5 h-full hover:border-primary/30 transition-colors cursor-pointer group">
              <div className="mb-3">{f.icon}</div>
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{f.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{f.desc}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>

    <div className="mt-8 rounded-lg border border-border bg-card p-6">
      <h3 className="text-sm font-semibold text-foreground mb-3">Recommended Tech Stack</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {[
          ["Object Storage", "S3 / GCS / Azure Blob"],
          ["Event Bus", "EventBridge / Kafka"],
          ["Serverless Compute", "Lambda / Cloud Functions"],
          ["Managed ETL", "Glue / Dataflow"],
          ["Metadata Catalog", "Glue Catalog / Hive"],
          ["Query Engine", "Athena / Trino / Presto"],
        ].map(([label, tech]) => (
          <div key={label} className="rounded-md bg-secondary/50 border border-border p-3">
            <p className="text-xs font-medium text-primary">{label}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{tech}</p>
          </div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Index;
