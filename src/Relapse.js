import React from "react";

const RelapseContext = React.createContext(null);

export const useViewModel = viewModel => {
  return React.useContext(RelapseContext)[viewModel];
};

export const useReactiveState = (viewModel, property, defaultValue) => {
  let subscription = null;
  const [v, setV] = React.useState(defaultValue || null);
  const vm = React.useContext(RelapseContext)[viewModel];
  React.useEffect(() => {
    subscription = vm[property].subscribe(e => setV(e));
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return [v, subscription];
};

export const Relapse = (element, container) => {
  return (
    <RelapseContext.Provider value={container}>
      {element}
    </RelapseContext.Provider>
  );
};
