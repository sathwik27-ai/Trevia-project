'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Define the expense category type
type ExpenseCategory =
  | 'Accommodation'
  | 'Food'
  | 'Transportation'
  | 'Activities'
  | 'Shopping'
  | 'Miscellaneous';

// Define the expense item interface
interface ExpenseItem {
  id: string;
  category: ExpenseCategory;
  description: string;
  amount: number;
  date: string;
}

// Budget Planning component
const BudgetPage = () => {
  const searchParams = useSearchParams();
  const mood = searchParams.get('mood');

  // Initialize state for budget planning
  const [budget, setBudget] = useState<number>(50000);
  const [expenses, setExpenses] = useState<ExpenseItem[]>([
    { id: '1', category: 'Accommodation', description: 'Hotel in Delhi (3 nights)', amount: 12000, date: '2023-06-15' },
    { id: '2', category: 'Transportation', description: 'Flight tickets (round trip)', amount: 15000, date: '2023-06-14' },
    { id: '3', category: 'Food', description: 'Restaurant meals (estimate)', amount: 8000, date: '2023-06-15' },
    { id: '4', category: 'Activities', description: 'Taj Mahal tour', amount: 2500, date: '2023-06-16' },
  ]);
  const [newExpense, setNewExpense] = useState<Omit<ExpenseItem, 'id'>>({
    category: 'Accommodation',
    description: '',
    amount: 0,
    date: new Date().toISOString().split('T')[0],
  });

  // Calculate total expenses
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remainingBudget = budget - totalExpenses;

  // Calculate category totals for chart
  const categoryTotals = expenses.reduce((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = 0;
    }
    acc[expense.category] += expense.amount;
    return acc;
  }, {} as Record<ExpenseCategory, number>);

  // Handle adding a new expense
  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newExpense.description || newExpense.amount <= 0) {
      return;
    }

    const expense: ExpenseItem = {
      ...newExpense,
      id: Date.now().toString(),
    };

    setExpenses([...expenses, expense]);
    setNewExpense({
      category: 'Accommodation',
      description: '',
      amount: 0,
      date: new Date().toISOString().split('T')[0],
    });
  };

  // Handle removing an expense
  const handleRemoveExpense = (id: string) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  // Handle changing the budget
  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setBudget(value);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0A1B3D] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/plan-trip" className="text-gray-300 hover:text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">Budget Planning</h1>
              <p className="text-gray-300 mt-2">Track your expenses and plan your travel budget</p>
              {mood && (
                <span className="inline-block mt-2 bg-[#7FD3F7] text-[#0A1B3D] px-3 py-1 rounded-full text-sm font-medium">
                  {mood.charAt(0).toUpperCase() + mood.slice(1)} Mood
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Budget Overview */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-[#0A1B3D] mb-4">Budget Overview</h2>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Total Budget (₹)
                </label>
                <input
                  type="number"
                  value={budget}
                  onChange={handleBudgetChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Expenses</span>
                  <span className="font-medium">₹{totalExpenses.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Remaining Budget</span>
                  <span className={`font-medium ${remainingBudget < 0 ? 'text-red-500' : 'text-green-500'}`}>
                    ₹{remainingBudget.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Budget Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${remainingBudget < 0 ? 'bg-red-500' : 'bg-green-500'}`}
                    style={{ width: `${Math.min(100, (totalExpenses / budget) * 100)}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>

            {/* Expense Distribution */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-[#0A1B3D] mb-4">Expense Distribution</h2>

              <div className="space-y-3">
                {Object.entries(categoryTotals).map(([category, total]) => (
                  <div key={category}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">{category}</span>
                      <span className="text-sm font-medium">₹{total.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className={`h-1.5 rounded-full ${category === 'Accommodation' ? 'bg-blue-500' :
                          category === 'Food' ? 'bg-green-500' :
                            category === 'Transportation' ? 'bg-purple-500' :
                              category === 'Activities' ? 'bg-yellow-500' :
                                category === 'Shopping' ? 'bg-pink-500' :
                                  'bg-gray-500'
                          }`}
                        style={{ width: `${(total / totalExpenses) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-1"></span>
                  <span className="text-gray-600">Accommodation</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-1"></span>
                  <span className="text-gray-600">Food</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mr-1"></span>
                  <span className="text-gray-600">Transportation</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-1"></span>
                  <span className="text-gray-600">Activities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Expenses Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-[#0A1B3D] mb-4">Add Expense</h2>

              <form onSubmit={handleAddExpense} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <select
                      value={newExpense.category}
                      onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value as ExpenseCategory })}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    >
                      <option value="Accommodation">Accommodation</option>
                      <option value="Food">Food</option>
                      <option value="Transportation">Transportation</option>
                      <option value="Activities">Activities</option>
                      <option value="Shopping">Shopping</option>
                      <option value="Miscellaneous">Miscellaneous</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      value={newExpense.date}
                      onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    value={newExpense.description}
                    onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
                    placeholder="Enter expense description"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={newExpense.amount || ''}
                    onChange={(e) => setNewExpense({ ...newExpense, amount: parseInt(e.target.value) || 0 })}
                    placeholder="Enter amount"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0A1B3D] text-white py-2 rounded-lg hover:bg-[#0A1B3D]/90 transition-colors"
                >
                  Add Expense
                </button>
              </form>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-[#0A1B3D] mb-4">Expense List</h2>

              {expenses.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th className="px-4 py-3">Category</th>
                        <th className="px-4 py-3">Description</th>
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3">Amount</th>
                        <th className="px-4 py-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {expenses.map((expense) => (
                        <tr key={expense.id} className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3">
                            <span className={`inline-block w-3 h-3 rounded-full mr-2 ${expense.category === 'Accommodation' ? 'bg-blue-500' :
                              expense.category === 'Food' ? 'bg-green-500' :
                                expense.category === 'Transportation' ? 'bg-purple-500' :
                                  expense.category === 'Activities' ? 'bg-yellow-500' :
                                    expense.category === 'Shopping' ? 'bg-pink-500' :
                                      'bg-gray-500'
                              }`}></span>
                            {expense.category}
                          </td>
                          <td className="px-4 py-3">{expense.description}</td>
                          <td className="px-4 py-3">{expense.date}</td>
                          <td className="px-4 py-3 font-medium">₹{expense.amount.toLocaleString()}</td>
                          <td className="px-4 py-3">
                            <button
                              onClick={() => handleRemoveExpense(expense.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-6 text-gray-500">
                  No expenses added yet. Add your first expense above.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BudgetPageWrapper = () => (
  <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><p className="text-gray-500">Loading...</p></div>}>
    <BudgetPage />
  </Suspense>
);

export default BudgetPageWrapper; 