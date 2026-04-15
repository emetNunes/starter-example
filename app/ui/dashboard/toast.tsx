import { BellSlashIcon } from "@heroicons/react/20/solid";

export default function Toast(message: string) {
  return (
    <div className="flex rounded-2xl bg-gray-200 ">
      <div className="bg-green-500 rounded-l-2xl p-2"></div>
      <div className="flex ">
        <BellSlashIcon className="w-5" />
        <h1>Alertado algo</h1>
      </div>
      <p>Aviso mensagem</p>
    </div>
  );
}
