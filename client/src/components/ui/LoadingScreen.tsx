import { dotWave } from "ldrs";
dotWave.register();
const LoadingScreen = () => {
  return (
    <div className="h-dvh flex justify-center items-center">
      <l-dot-wave size={100} speed={1} color={"green"}></l-dot-wave>
    </div>
  );
};

export default LoadingScreen;
