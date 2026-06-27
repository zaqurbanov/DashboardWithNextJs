import {
  MdPeople,
  MdOutlineGroup,
  MdOutlineVerified,
  MdOutlineMailOutline,
} from "react-icons/md";
import Image from "next/image";
import { usersMock } from "@/mock/user";

export const metadata = { title: "Teams" };

const DEPARTMENTS = [
  { name: "Engineering",  color: "#7878ec", members: 12, lead: "Zaur Q."   },
  { name: "Design",       color: "#22c55e", members: 6,  lead: "Ayla M."   },
  { name: "Marketing",    color: "#f59e0b", members: 8,  lead: "Firdovs E." },
  { name: "Sales",        color: "#ef4444", members: 5,  lead: "Nigar H."  },
];

const ONLINE_COUNT = 8;

export default function TeamsPage() {
  const admins   = usersMock.filter((u) => u.role === "admin");
  const managers = usersMock.filter((u) => u.role === "manager");
  const members  = usersMock.filter((u) => u.role === "user").slice(0, 9);
  const totalActive = usersMock.filter((u) => u.status === "active").length;

  const statCards = [
    { label: "Total Members", value: usersMock.length, icon: MdPeople,          color: "var(--color-primary)" },
    { label: "Online Now",    value: ONLINE_COUNT,      icon: MdOutlineGroup,    color: "#22c55e"              },
    { label: "Active Users",  value: totalActive,       icon: MdOutlineVerified, color: "#f59e0b"              },
    { label: "Departments",   value: DEPARTMENTS.length, icon: MdOutlineGroup,   color: "#ef4444"              },
  ];

  return (
    <div className="flex flex-col gap-6 animate-fade-up" style={{ animationFillMode: "both" }}>

      {/* Header */}
      <div>
        <h1 className="font-black text-2xl">Teams</h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
          Manage your departments, members and roles.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card, i) => (
          <div
            key={card.label}
            className="neu-flat rounded-2xl p-5 flex flex-col gap-3 animate-fade-up"
            style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both" }}
          >
            <div
              className="w-10 h-10 rounded-xl neu-inset flex items-center justify-center"
              style={{ color: card.color }}
            >
              <card.icon size={20} />
            </div>
            <div>
              <p className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>{card.label}</p>
              <p className="text-2xl font-black mt-0.5">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Departments */}
      <div className="neu-flat rounded-2xl p-6">
        <p className="font-bold text-sm mb-5">Departments</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DEPARTMENTS.map((dept, i) => (
            <div
              key={dept.name}
              className="neu-inset rounded-2xl p-5 flex flex-col gap-3 animate-fade-up"
              style={{ animationDelay: `${i * 50}ms`, animationFillMode: "both" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                style={{ background: dept.color }}
              >
                {dept.name[0]}
              </div>
              <div>
                <p className="font-bold text-sm">{dept.name}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                  {dept.members} members
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--text-soft)" }}>
                  Lead: {dept.lead}
                </p>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: `${(dept.members / 15) * 100}%`, background: dept.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Admins + Managers */}
      <div className="flex flex-col lg:flex-row gap-5">

        {/* Admins */}
        <div className="neu-flat rounded-2xl p-6 flex-1">
          <div className="flex items-center justify-between mb-5">
            <p className="font-bold text-sm">Admins</p>
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-lg"
              style={{ background: "var(--color-primary)1a", color: "var(--color-primary)" }}
            >
              {admins.length}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            {admins.slice(0, 5).map((u, i) => (
              <MemberRow key={u.id} user={u} index={i} badgeColor="var(--color-primary)" />
            ))}
          </div>
        </div>

        {/* Managers */}
        <div className="neu-flat rounded-2xl p-6 flex-1">
          <div className="flex items-center justify-between mb-5">
            <p className="font-bold text-sm">Managers</p>
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-lg"
              style={{ background: "#22c55e1a", color: "#22c55e" }}
            >
              {managers.length}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            {managers.slice(0, 5).map((u, i) => (
              <MemberRow key={u.id} user={u} index={i} badgeColor="#22c55e" />
            ))}
          </div>
        </div>
      </div>

      {/* All members grid */}
      <div className="neu-flat rounded-2xl p-6">
        <p className="font-bold text-sm mb-5">All Members</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {members.map((u, i) => (
            <div
              key={u.id}
              className="neu-inset rounded-xl p-4 flex items-center gap-3 animate-fade-in"
              style={{ animationDelay: `${i * 40}ms`, animationFillMode: "both" }}
            >
              <div className="relative shrink-0">
                <Image
                  src={u.image}
                  alt={u.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <span
                  className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2"
                  style={{
                    background: u.status === "active" ? "#22c55e" : "#aaa",
                    borderColor: "var(--neu-bg)",
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm truncate">{u.name}</p>
                <p className="text-xs truncate" style={{ color: "var(--text-muted)" }}>
                  {u.email}
                </p>
              </div>
              <MdOutlineMailOutline size={16} className="shrink-0" style={{ color: "var(--text-muted)" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MemberRow({
  user,
  index,
  badgeColor,
}: {
  user: { id: string; name: string; image: string; email: string; status: string };
  index: number;
  badgeColor: string;
}) {
  return (
    <div
      className="flex items-center gap-3 animate-fade-in"
      style={{ animationDelay: `${index * 40}ms`, animationFillMode: "both" }}
    >
      <div className="relative shrink-0">
        <Image
          src={user.image}
          alt={user.name}
          width={36}
          height={36}
          className="rounded-full object-cover"
        />
        <span
          className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2"
          style={{
            background: user.status === "active" ? "#22c55e" : "#aaa",
            borderColor: "var(--neu-bg)",
          }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-xs truncate">{user.name}</p>
        <p className="text-xs truncate" style={{ color: "var(--text-muted)" }}>{user.email}</p>
      </div>
      <span
        className="text-xs font-bold px-2 py-0.5 rounded-lg shrink-0"
        style={{ background: `${badgeColor}1a`, color: badgeColor }}
      >
        Active
      </span>
    </div>
  );
}
