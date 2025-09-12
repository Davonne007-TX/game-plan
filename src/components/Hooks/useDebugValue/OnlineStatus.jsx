import { useOnlineStatus } from "./useOnlineStatus";

function Status() {
  const isOnline = useOnlineStatus();
  return (
    <h1 className="mt-20 text-3xl font-thin p-2">
      {isOnline ? "✅ Online" : "❌ Disconnected"}
    </h1>
  );
}

export default function OnlineStatus() {
  return (
    <section className="flex-time my-4">
      <div className="max-w-sm md:max-w-3xl p-8 mt-10">
        <h2 className="font-anton text-white text-2xl">useDebugValue</h2>

        <div className="bg-white">
          <Status />
        </div>
      </div>
    </section>
  );
}
