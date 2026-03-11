type Activity = {
  id: string;
  message: string;
};

type Props = {
  activities: Activity[];
};

export default function ActivityFeed({ activities }: Props) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>

      <ul className="space-y-2">
        {activities.map((activity) => (
          <li key={activity.id} className="text-gray-700">
            {activity.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
